import React from 'react'
import "./listcomp.css"
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";


const ListComp = ({title , body , id , delid , display ,updateId , toBeUpdate }) => {
  return (
      <div className='list-card p-3 '>
          <div>
              <h5>{ title }</h5>
              <p className='list-card-p'>
                 {body.split( " " , 77)}...
              </p>
          </div>
          <div className='d-flex justify-content-around '>
              <div className=' d-flex justify-content-around align-items card-icon-head px-2 py-1'
                  onClick={() => {
                  display("block");
                  toBeUpdate(updateId)
              }}>
              <GrDocumentUpdate className='card-icon' />Upate
          </div>
          <div className=' d-flex justify-content-around align-items card-icon-head px-2 py-1' onClick={() => {delid(id);}}>
              <MdDelete className='card-icon del' />Delete
              </div>
              </div>
      </div>
  )
}

export default ListComp