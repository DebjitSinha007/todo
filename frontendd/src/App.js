import React , { useEffect} from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/footer/Footer'
import Info from './components/info/Info'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Signup from './components/signup/Signup'
import SignIn from './components/signin/SignIn'
import Todo from './components/todo/Todo'
import { useDispatch } from "react-redux";
import { authActions } from "./store";

const App = () => {
   const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, [])
  
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<Info />} />
          <Route exact path='/todo' element={ <Todo/>} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/signin' element={ <SignIn/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
