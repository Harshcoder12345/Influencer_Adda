import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Loading from '../Loading';

const AllUsers = () => {


    const {isLoading, isError, message , totalusers} = useSelector(state => state.admin)

    useEffect(() => {


        if(isError && message){
          toast.error(message, {position : "top-center"})
        }
        
        
          }, [isError, message])
        
          if(isLoading){
            return <Loading/>
          }
    

  return (
    <div className="space-y-4">
    {totalusers.map((user) => (
      <div key={user._id} className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <span className="text-sm text-gray-500">{new Date(user.createdAt).toDateString('en-IN')}</span>
        </div>
      </div>
    ))}
  </div>
  )
}

export default AllUsers