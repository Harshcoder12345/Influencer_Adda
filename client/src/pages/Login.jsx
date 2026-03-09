import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../features/auth/authSlice';

const Login = () => {



  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {isLoading, isError, user, message, isSuccess} = useSelector(state => state.auth) 
  
    const [formData , setformData] = useState({
      email : "",
      password : "",
    })
  
    const {email , password} = formData
    
    
      const handleSubmit = (e) => {
          e.preventDefault();
  
          if (!email || !password ) {
              toast.error('Fill All Details' , {position : 'bottom-center'})
          }
  
          if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
              toast.error('Email Requires @' , {position
                 : 'bottom-center'})
          }

         dispatch(loginUser(formData))
       
  
  
          
  setformData({
    email : "",
    password : "",
  })
    
          
         
      };


          useEffect(()=> {
      
              if(user){
                  navigate('/')

              }if(isSuccess && user){
                toast.success('Login Successfully')
              }
              if(isError && message){
                  toast.error(message, {position : 'top-center'})
              }
          }, [user,message,isError,isSuccess ])
      
          if(isLoading){
             return <h1>Loading...</h1>
          }
  
      return (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
              <div className="bg-white rounded-xl shadow-md w-full max-w-md">
                  <div className="text-center p-6">
                      <h2 className="text-2xl font-semibold text-gray-900">Login</h2>
                  </div>
                  <div className="px-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="space-y-2">
                              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                              <input
                                  id="email"
                                  type="email"
                                  placeholder="Enter your email"
                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  value= {email}
                                  onChange={(e)=> setformData({
                                      ...formData,  email: e.target.value
                                  })}
                
                              />
                          </div>
                          <div className="space-y-2">
                              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                              <input
                                  id="password"
                                  type="password"
                                  placeholder="Enter your password"
                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  value= {password}
                                  onChange={(e)=> setformData({
                                      ...formData,  password: e.target.value
                                  })}
                      
                              />
                          </div >
                          <button  type="submit" className="bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold py-2 px-4 my-[20px]  rounded focus:outline-none focus:shadow-outline w-full">
                              Login
                          </button>
                          <Link to={'/register'}>
                          <button  type="submit" className="bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold py-2 px-4 my-[20px]  rounded focus:outline-none focus:shadow-outline w-full">
                              SignUp
                          </button>
                          </Link>
                          
                      </form>
                  </div>
              </div>
          </div>
      );


};

export default Login;