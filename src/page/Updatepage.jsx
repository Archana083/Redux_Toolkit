import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../Api/UserDetailSlice";

const Updatepage = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const diaspatch = useDispatch();
  const [updateData, setUpdateData] = useState();
  console.log(id);
  const allUser = useSelector((state) => state.app.users);
  console.log(allUser);

  const singleUser = allUser.filter((item) => item.id == id);
  console.log(singleUser);

  useEffect(() => {
    if (id) {
      setUpdateData(singleUser[0]);
    }
  }, []);
  console.log(updateData);

     const newData = (e) => {
      setUpdateData({...updateData, [e.target.name]: e.target.value})
    }
    const handleUpdate = (e) => {
      e.preventDefault();
      diaspatch(updateUser(updateData));
      navigate("/")

    }

  return (
    <>
      <div className="container mt-5 addpage">
        <div className="row mt-5">
        <div className='col-lg-6 img '>
    <div></div>

    </div>
<div className='col-lg-5'>

<div className='card shadow-sm rounded '>
<h1 className='text-center'>Update User</h1>

            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={updateData && updateData.name}
                  onChange={newData}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="exampleFormControlInput2"
                  value={updateData && updateData.email}
                 onChange={newData}

                />{" "}
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>{" "}
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Updatepage;
