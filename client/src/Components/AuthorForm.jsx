import React from 'react'
import { useState } from 'react';
import { simplePost } from '../Services/simplePost';
import ButtonForm from './ButtonForm';

export default function AuthorForm(props) {

  const { formAuthor, formSetAuthor, formAuthorForm, formErrors } = props;

  // const [author, setAuthor] = useState();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    formSetAuthor({
      ...formAuthor,
      [name]:value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    formAuthorForm();
  }

  return (
    <div className="card">
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="author" className='form-label'>Autor: </label>
          <input type="text" name="author" className='form-control' value={formAuthor?.author} onChange={handleOnChange}/>
        </div>
        <div className="form-group mt-2" >
          <input type="submit" className='btn btn-primary' value="SUBMIT" />
        </div>
        {
          formErrors.length>0?
          formErrors.map((error, index)=>{
            return(
              <div key={index} class="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )
          }
          )
          :
          null
        }
      </form>

    </div>
  )
}
