import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Phone, Mail, Clock, User, CreditCard, Building, ChevronRight } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { userFetchBookings, userFetchSingleBooking } from '../features/booking/BookingSlice';
import { Link } from 'react-router-dom';
import { GetCommentByUser } from '../features/comment/CommentSlice';


const Profile =()=> {

const {user, isLoading, isError, message} = useSelector(state => state.auth)
const {userbooking, isBookingLoading, isBookingError} = useSelector(state => state.booking)
// console.log(userbooking, 'userbok');


const dispatch = useDispatch()

useEffect(()=> {
  // console.log('Mounting');
  dispatch(userFetchBookings())
},[])



const  HandleDetail = (bid) => {

  console.log('handledetailworking', bid);
  dispatch(GetCommentByUser(bid))
  
dispatch(userFetchSingleBooking(bid))
}


useEffect(() => {

    if(!user){
      navigate('/login')
    }
    if(isError && message || isBookingError && message){
  toast.error(message, {position : "top-center"})
}

  }, [isError, message, user])

  if(isLoading || isBookingLoading){
    return <Loading/>
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <img
                    src='https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740'
                    alt={''}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-gray-900">{user.name} </h2>
                <p className="text-gray-500">Premium Member Since :{new Date(user.since).toLocaleDateString('en-IN')} </p>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-3 text-gray-400" />
                    <span> {user.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-3 text-gray-400" />
                    <span> {user.phone}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bookings Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Booking History</h3>
              </div>

              <div className="divide-y divide-gray-100">
                {userbooking?.map((booking) => (
                  <div key={booking.id} className="p-6 hover:bg-gray-50 transition duration-150">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <img
                        src={booking?.influencer?.profilepic}
                        alt={booking?.property}
                        className="w-full sm:w-48 h-32 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          {/* <h4 className="text-lg font-medium text-gray-900 truncate">
                            {booking.property}
                          </h4> */}
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            booking.status === 'Upcoming' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            
                            {booking?.status}
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                            {new Date(booking?.createdAt).toLocaleDateString('en-IN')}
                          </div>
                          <div className="flex items-center text-black-700">
                            {booking?.influencer?.name}
                           
                          </div>
                        </div>
                        <div className="mt-4">
                            <Link  to={`/influencer/${booking?.influencer?._id}`}>
                          <button className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center" onClick={()=>HandleDetail(booking?._id)}>
                            View Details
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;