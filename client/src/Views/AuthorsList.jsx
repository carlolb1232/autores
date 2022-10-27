import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { simpleDelete } from '../Services/simpleDelete';
import { simpleGet } from '../Services/simpleGet';

export default function AuthorsList() {
  
  const [authors, setAuthors] = useState();
  const [deletedId, setDeletedId] = useState();

  const getAuthorsFromService = async () => {
    const authorsFromService = await simpleGet(`http://localhost:8000/api/authors`);
    console.log(authorsFromService);
    setAuthors(authorsFromService);
  }

  useEffect(() => {
    getAuthorsFromService();
  }, []);

  const authorDeleteFromService = async (id) => {
    try {
      const authorDeleted = await simpleDelete(`http://localhost:8000/api/author/delete/${id}`)
      console.log(authorDeleted)
      setDeletedId(id)
    } catch (error) {
      console.log(error)
    }
  } 

  const removeFromDom = () => {
    setAuthors(authors?.filter(author=>author._id !== deletedId))
  }

  useEffect(() => {
    removeFromDom();
  }, [deletedId]);

  return (
    <div>
      <Link to="/create/author">Add new author</Link>
      <p className='purple'>We have quotes by:</p>
      <table className='table table-dark table-striped'>
        <thead>
          <tr>
            <th>Author</th>
            <th>Accions available</th>
          </tr>
        </thead>
        <tbody>
          {
            authors?.map((author)=>{
              return(
                <tr key={author._id}>
                  <td className='purple'>{author.author}</td>
                  <td><button className='btn btn-warning'><Link className='link' to={`/update/author/${author._id}`}>UPDATE</Link></button> <button className='btn btn-danger' onClick={()=>authorDeleteFromService(author._id)}>DELETE</button></td>
                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
    </div>
  )
}
