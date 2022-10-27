import React from 'react'
import { useState } from 'react'
import { simpleGet } from '../Services/simpleGet';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import AuthorForm from '../Components/AuthorForm';
import { simpleUpdate } from '../Services/simpleUpdate';

export default function UpdateAuthor() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [author, setAuthor] = useState();

  const [errors, setErrors] = useState([]);

  const [authorExist, setAuthorExist] = useState(true);

  const renderNoAuthor = () => {
    return (
      <div>
        <div class="alert alert-warning" role="alert">
        <p>Lo sentimos, pero no pudimos encontrar el autor que estás buscando. ¿Deseas agregar este autor a nuestra base de datos?</p>  
        <Link to="/create/author">Crear autor</Link>
        </div>
      </div>
    )
  }

  const getAuthorFromService = async () => {
    const authorFromService = await simpleGet(`http://localhost:8000/api/author/${id}`);
    console.log("a")
    console.log(authorFromService.author)
    if (authorFromService.name) {
      console.log("NO HAAYYY")
      setAuthorExist(false)
    }else{
      setAuthor(authorFromService);
    }
  }

  useEffect(() => {
    getAuthorFromService();
  }, []);

  const updateAuthorFromService = async () => {
    const updatedAuthor = await simpleUpdate(`http://localhost:8000/api/author/update/${id}`, author);

    if (updatedAuthor.errors.length === 0) {
      navigate("/");
    }else{
      updatedAuthor&&setErrors([
        ...errors,
        updatedAuthor.errors.response.data.message
      ])
    }
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <p className='purple'>Edit this author: </p>
      {
        authorExist?
          author&&
          <AuthorForm formAuthor={author} formSetAuthor={setAuthor} formAuthorForm={updateAuthorFromService} formErrors={errors}/>
        :
        renderNoAuthor()
      }
    </div>
  )
}
