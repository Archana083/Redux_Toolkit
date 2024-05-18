import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const Updatepage = () => {
  const {id} = useParams();
  const [updateData, setUpdateData] = useState();
  const {alluser, loading} = useSelector((state) => state.app.users)
  
     useEffect(() => {
  if(id)
    {
      const singleUser = alluser.filter((item) => item.id === id);
     setUpdateData(singleUser)
     }
     })
     
    return (
    <>
        <div className='container mt-5'>
    <div className='row mt-5'>
<div className='col-lg-6 offset-lg-3 card mt-5 p-5 shadow-sm'>

    <form>
    
    <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Full Name
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleFormControlInput1"
    
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput2" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleFormControlInput2"
/>  </div>

<div className='text-center'>
<button type='submit' className='btn btn-primary'>submit</button>

</div>    </form>
</div>
    </div>
    </div>
    </>
  )
}

export default Updatepage