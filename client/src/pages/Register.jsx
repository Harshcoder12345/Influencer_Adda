import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser, resetauth } from '../features/auth/authSlice';

const RegistrationPage = () => {


const navigate = useNavigate()
const dispatch = useDispatch()

const {isLoading, isError, user, message, isSuccess} = useSelector(state => state.auth)

  const [formData , setformData] = useState({
    name : "",
    email : "",
    password : "",
    confirmPassword : "",
    phone : "",
  })

  const { name , email , password, confirmPassword, phone} = formData
  
  
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword || !phone) {
            toast.error('Fill All Details' , {position : 'bottom-center'})
        }

        if (password !== confirmPassword) {
         toast.error('Password Not Match' , {position : 'bottom-center'})
        }

        // Basic phone number validation (10 digits)
        if (!/^\d{10}$/.test(phone)) {
            toast.error('Number should be 10 digit' , {position : 'bottom-center'})
        }

         // Basic email validation
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            toast.error('Email Requires @' , {position : 'bottom-center'})
        }

     dispatch(RegisterUser(formData))
     setformData({
            name : "",
            email : "",
            password : "",
            confirmPassword : "",
            phone : "",
     })

        // console.log("Register");
          
    };

    useEffect(()=> {
        dispatch(resetauth())
    },[])


    useEffect(() => {
        if (isError && message) {
            if (message.toLowerCase().includes('User is Already Exist')) {
                toast.error('User already exists', { position: 'top-center' });
            } else {
                toast.error('User Already exists', { position: 'top-center' });
            }
        }
    
        if (isSuccess) {
            toast.success('Registered Successfully');
            navigate('/'); // optionally navigate after success
        }
    }, [message, isError, isSuccess, navigate]);

    if(isLoading){
       return <h1>Loading...</h1>
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-xl shadow-md w-full max-w-md">
                <div className="text-center p-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Register</h2>
                </div>
                <div className="px-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input
                                id="name"
                                placeholder="Enter your full name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                type  = "name"
                                value= {formData.name}
                                onChange={(e)=> setformData({
                                    ...formData, name : e.target.value
                                })}
                                  
                            />
                        </div>
                        <div className="space-y-2 relative">
                            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                            <input
                                id="phone"
                                type='number'
                                placeholder="Enter your phone number"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                value= {formData.phone}
                                onChange={(e)=> setformData({
                                    ...formData,  phone: e.target.value
                                })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value= {formData.email}
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
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value= {formData.confirmPassword}
                                onChange={(e)=> setformData({
                                    ...formData, confirmPassword : e.target.value
                                })}
                             
                            />
                        </div>
                        <button  type="submit" className="bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold py-2 px-4 my-[20px]  rounded focus:outline-none focus:shadow-outline w-full">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;


