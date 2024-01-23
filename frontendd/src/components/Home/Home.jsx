import React from 'react'
import "./home.css"
const Home = () => {
  return (
      <div className='home d-flex justify-content-center align-items-center'>
          <div className='container d-flex justify-content-center align-items-center flex-column'>
              <h1 className=' text-center'>
                  Organize Your <br /> work and life, finally.
              </h1> 
              <p>
                  Become focused , organized, and calm with
                todo app.  
              </p>
              <button className='home-btn p-2'>Make Todo List</button>
          </div>
    </div>
  )
}

export default Home