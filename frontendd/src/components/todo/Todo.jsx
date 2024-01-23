import React, { useEffect, useState } from 'react'
import "./todo.css"
import ListComp from '../listcomp/ListComp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from '../update/Update';
import axios from 'axios'
let id = sessionStorage.getItem("id")
let toBeUpdateArray = [];

const Todo = () => {

    const [ inputs , setInputs ] =  useState({title: "" , body:"" ,})
    const [Array, setArray] = useState([]);
   
    
    const show = () => {
       document.getElementById("textarea").style.display = "block"
    }
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs , [name]: value})
    }
    const submit = async () => {
        if (inputs.title === "" || inputs.body === "") {
            toast.error("Title Or Body Should Not Be Empty")
        } else {
            if (id) {
                await axios
                    .post(`${window.location.origin}/api/v2/addTask`, {
                        title: inputs.title,
                        body: inputs.body,
                        id: id,
                    })
                    .then((response) => {
                    console.log(response);
                    })
                 setInputs({ title: "", body: "" })
                 toast.success("Your Task Is Added")
            } else {
                 setArray([ ...Array , inputs ])
                 setInputs({ title: "", body: "" })
                 toast.success("Your Task Is Added")
                 toast.error("Your Task Is Not Saved ! Please SignUp")
                
            }
       
        }
        
    }
    const del = async (Cardid) => {
        if (id) {
             await axios.delete(`${window.location.origin}/api/v2/deleteTask/${Cardid}`, { data: { id: id } })
            .then(() => {
              toast.success("Your Task Is Deleted");
        })
        } else {
             toast.error("Please SignUp First");
        }
       
    }
    const dis = (value) => {
        document.getElementById("todo-update").style.display = value
    }
    const update = (value) => {
        toBeUpdateArray = Array[value]
    }
    useEffect(() => {
        if (id) {
               const fetch = async () => {
            await axios.get(`${window.location.origin}/api/v2/getTask/${id}`)
                .then((response) => {
                    setArray(response.data.list);
                })
        };
        fetch();
         }
      
    }, [submit])

    return (
     <>
        <div className='todo'>
            <ToastContainer/>
          <div className='todo-main container d-flex justify-content-center align-items-center flex-column'>
              <div className='d-flex flex-column todo-inputs-div w-50 p-1'>
                  <input type="text" placeholder='TITLE' className='my-2 p-2 todo-inputs' onClick={show} name='title' value={inputs.title} onChange={change} />


                   <textarea id='textarea' type="text" placeholder='BODY' className='my-2 
                    p-2 todo-inputs' name='body'  value={inputs.body} onChange={change} />
              </div>
              <div className='w-50 d-flex justify-content-end my-3'>
                  <button className='home-btn px-2 py-1' onClick={submit}>Add</button>
              </div>
          </div>
            <div className="todo-body">
                <div className="container-fluid">
                    <div className="row">
                        {Array && Array.map((item, index) => (
                        <div className='col-lg-3 col-10 mx-5 my-2 ' key={index} >
                                <ListComp title={item.title}
                                    body={item.body}
                                    id={item._id}
                                    delid={del}
                                    display={dis}
                                    updateId={index}
                                    toBeUpdate={update}
                                />
                        </div>
                    ))}
                    </div>
                    </div>   
              </div>
            </div>
            <div className="todo-update" id='todo-update'>
                <div className="container update">
                    <Update
                        display={dis}
                        update ={toBeUpdateArray}
                    />
                </div>     
            </div>
     </>
  )  
}

export default Todo