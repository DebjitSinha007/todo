import React from 'react'
import "./Navbar.css"
import { GiWhiteBook } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { authActions } from '../../store'
const Navbar = () => {
  const isloggedIn = useSelector((state) => state.isloggedIn)
  console.log(isloggedIn);
    const dispatch = useDispatch();
  const logout = () => {
    sessionStorage.clear("id")
     dispatch(authActions.logout())
  }
  return (
    <div><nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className="navbar-brand" to="/"><GiWhiteBook /><b>TODO</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
            <Link className="nav-link active" aria-current="page"       to="/">Home</Link>
            </li>
            
         <li className="nav-item mx-2">
             <Link className="nav-link active " aria-current="page" 
             to="/about">About Us</Link>
        </li>
          <li className="nav-item mx-2">
           <Link className="nav-link active " aria-current="page" 
            to="/todo">Todo</Link>
            </li>
            {!isloggedIn && <>
               <li className="nav-item mx-2">
            <Link className="nav-link active btn-nav" aria-current="page" 
            to="/signup">Sign Up</Link>
          </li>      
         <li className="nav-item mx-2">
            <Link className="nav-link active btn-nav" aria-current="page" 
             to="signin">Sign In</Link>
         </li>      
            </>}
            {isloggedIn && <> <li className="nav-item mx-2" onClick={logout}>
              <Link className="nav-link active btn-nav" aria-current="page" 
                to="#">Log out</Link>
              
        </li> </> }
        
         
          {/* <li className="nav-item"> */}
            {/* <Link className="nav-link active" aria-current="page"  */}
           {/* to="#"><img className='img-fluid user-png' src="https://i.pinimg.com/564x/a2/5c/64/a25c646ac9c2510200931370b742b89d.jpg" alt='' /></Link> */}
          {/* </li>                                       */}
      </ul>
    </div>
  </div>
      </nav>
      </div>
  )
}

export default Navbar