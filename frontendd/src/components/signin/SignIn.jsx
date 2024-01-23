import React from 'react'
import "./signIn.css"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store'

const SignIn = () => {
    const dispatch = useDispatch()
     const history = useNavigate()
     const [inputs, setInputs] = useState({
        email: "",
        password: "",
     })
     const change = (e) => {
        const { name, value } = e.target
        setInputs({...inputs , [name]: value})
    }
    const submit = async (e) => {
        e.preventDefault()
        await axios.post(`${window.location.origin}/api/v1/signin`, inputs).then((response) => {
            sessionStorage.setItem("id", response.data.others._id)
            dispatch(authActions.login())
             history("/todo")
        })
    }
  return (
     <div className='signup'>
     <div className='container'>
         <div className='row'>
             <div className='col-lg-8 d-flex justify-content-center align-items-center colum'>
                 <div className='d-flex flex-column w-100 p-5'>
                     <input className='p-2 my-3 input-signup' type="email"
                         name='email' placeholder='Enter your Email' value={inputs.email} onChange={change} />
                     <input className='p-2 my-3 input-signup' type="password"
                         name='password' placeholder='Enter your Password' value={inputs.password} onChange={change} />
                     <button className='btn-signup p-2' onClick={submit}>Sign In</button>
                 </div>
             </div>
               <div className='col-lg-4 d-flex justify-content-center align-items-center colum col-left'>
                    <div> <h1 className='text-center 
                           sign-up-heading'>
                             sign <br />In   
                              </h1>
                   </div>
                   
                   
             </div>
         </div>
     </div>
   </div>
  )
}

export default SignIn