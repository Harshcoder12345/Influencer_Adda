import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'
import { ToastContainer } from 'react-toastify'
import AdminDashboard from './pages/AdminDashboard'
import PageNotFound from './pages/PageNotFound'
import Profile from './pages/Profile'
import Influencer from './pages/Influencer'


 

const App = () => {
  return (
    <Router>
       <div className={`min-h-screen bg-white`}>
        <Navbar/>
    <Routes>
      <Route path='*' element = {<PageNotFound/>} />
      <Route path='/' element = {<Home/>} />
      <Route path='/profile' element = {<Profile/>} />
      <Route path='/Influencer/:id' element = {<Influencer/>} />
      <Route path='/login' element = {<Login/>} />
      <Route path='/register' element = {<Register/>} />
      <Route path='/admin' element = {<AdminDashboard/>} />
    </Routes>
    
    <Fotter/>
   
    </div>
    <ToastContainer/>
  </Router>
  )

  

  
}

export default App