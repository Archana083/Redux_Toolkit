import React from 'react'
import { useSelector } from 'react-redux'

const Modal = ({id, show, setShow}) => {
    const allUser = useSelector((state) => state.app.users);
    console.log(allUser);
    const singleUser = allUser.filter((item) => item.id == id);
      console.log(singleUser);
    return (
    <>

  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
        User Detail
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
        
        <h3>{singleUser[0].name}</h3>
        <h4>{singleUser[0].email}</h4>

        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
         
        </div>
      </div>
    </div>
  </div>




    </>
  )
}

export default Modal