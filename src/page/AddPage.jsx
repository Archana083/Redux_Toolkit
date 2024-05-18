import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { createUser } from '../Api/UserDetailSlice';

const AddPage = () => {
    const [users, setUsers] = useState({});
     const dispatch = useDispatch();
    const navigate = useNavigate();
    const getUserData = (e) => {
        setUsers({...users, [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("users...", users);
        dispatch(createUser(users)) 
      navigate("/")
    }
  return (
    <>
    <div className='container mt-5'>
    <div className='row mt-5'>
<div className='col-lg-6 offset-lg-3 card mt-5 p-5 shadow-sm'>

<form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="Name" className="form-label">
      Name
    </label>
    <input
      type="text"
      className="form-control"
      id="Name"
      name="name"
      onChange={getUserData}
    />
    <div className="form-text">
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email 
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      name="email"
      onChange={getUserData}

    />
      </div>

  <div className="mb-3 text-center">
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
  </div>
</form>
</div>
    </div>
    </div>

    </>
  )
}

export default AddPage