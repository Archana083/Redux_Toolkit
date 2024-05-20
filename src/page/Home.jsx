import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../Api/UserDetailSlice";
import Modal from "../Component/Modal";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [show, setShow] = useState(false);
  const { users, loading } = useSelector((state) => state.app);
  console.log(users);
  useEffect(() => {
    dispatch(getUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <>
      {show && <Modal id={id} show={show} setShow={setShow} />}
      <div className=" my-5 container-fluid home">
        <div className="row my-5">
          <div className="col-lg-8 col-sm-12 offset-lg-2  my-5 card p-5 shadow-sm">
            <h1 className="text-center"> All Data</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                          <button
                            type="submit"
                            className="btn btn-warning me-1"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => [setId(item.id), setShow(true)]}
                          >
                            View
                          </button>

                          <Link
                            to={`update/${item.id}`}
                            className="btn btn-success me-1"
                          >
                            Edit
                          </Link>
                          <Link
                            type="submit"
                            onClick={() => dispatch(deleteUser(item.id))}
                            className="btn btn-danger"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
