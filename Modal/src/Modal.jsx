import React from "react";

const Modal = ({ isOpen }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Modal title</h3>
        </div>

        {isOpen && (
          <div className="modal-body">
            <textarea name="modalbody" id="" cols="7" rows="6"></textarea>
          </div>
        )}
        <div className="modal-footer">
          {/* <button className="button" >
            close
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;

/*
 * Title MyModal header
 * Modal Content Body
 * Modal Footer
 * submit Close button
 */
