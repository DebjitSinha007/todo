import React, { useEffect, useState } from 'react'
import "./update.css"
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = ({ display, update }) => {
  useEffect(() => {
   setInputs( {
    title: update.title,
    body: update.body,
  })
  }, [update])
  
  const [inputs, setInputs] = useState(
    {
    title: "",
    body: "",
  })
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value })
  };
  const submit = async () => {
    await axios.put(`${window.location.origin}/api/v2/updateTask/${update._id}` , inputs)
      .then(() => {
     toast.success("Your Task Is Updated")
    })
     display("none")
  }
  return (
      <div className='p-5 d-flex justify-content-center align-items-start flex-column update'>
          <h3>Update Your Task</h3>
      <input
        type="text"
        className='todo-inputs my-4 w-100 p-3'
        value={inputs.title}
        name="title"
        onChange={change}
      />
      <textarea
        className='todo-inputs w-100 p-3'
        value={inputs.body}
        name="body"
        onChange={change}
      />
      <div>
        <button className='btn btn-dark my-4' onClick={submit}>Update</button>
        <button className='btn btn-danger my-4 mx-3' onClick={() => {display("none")}} > 
          Close
        </button>
      </div>
      </div>
  );
}


export default Update