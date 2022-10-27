import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthorForm from '../Components/AuthorForm'
import { simplePost } from '../Services/simplePost'

export default function CreateAuthor() {

  const navigate = useNavigate();


  const [author, setAuthor] = useState({
    author:""
  });

  const [errors, setErrors] = useState([]);



  const postAuthorFromService = async () => {
    const postedAuthor = await simplePost(`http://localhost:8000/api/author/new/`, author);
    console.log(postedAuthor);
    
    if (postedAuthor.errors.length === 0) {
      navigate("/");
    }else{
      postedAuthor&&setErrors([
        ...errors,
        postedAuthor.errors.response.data.message
      ])
    }
    
  }

  return (
    <>
      <Link to="/">Home</Link>
      <p className='purple'>Add a new author: </p>
      <AuthorForm formAuthor={author} formSetAuthor={setAuthor} formAuthorForm={postAuthorFromService} formErrors={errors}/>
    </>
  )
}
