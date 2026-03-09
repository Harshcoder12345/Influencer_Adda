import React, { useEffect } from 'react'
import { MapPin, Instagram, Calendar, Mail, CheckCircle, Star, Clock, Users } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentSection from '../components/CommentSection';
import { useParams } from 'react-router';
import { fetchSingleInfluencer } from '../features/Influ/InfluencerSlice';
import { userFetchBookings, userSliceAddBooking } from '../features/booking/BookingSlice';
import { GetCommentByUser } from '../features/comment/CommentSlice';


const Influencer = () => {
    const [showBooking, setShowBooking] = useState(false);
  const { comments } = useSelector(state => state.comment)

const {userbooking, isBookingLoading, isBookingError} = useSelector(state => state.booking)
const {user} = useSelector(state => state.auth)
const { SingleInfluencer} = useSelector(state => state.Influ)

// console.log(SingleInfluencer._id, 'Single Influencer at Influencer page')
// console.log(userbooking[0]?.influencer._id,  'userbooking at single influencer page ');



    // console.log(SingleInfluencer, 'SingleInflueatInflue');
    
    const {id} = useParams();
    
    
    const dispatch = useDispatch()
    


const HandleBookInfluencer = (id) => {
dispatch(userSliceAddBooking(id))
}



    useEffect(()=> {
window.scrollTo(0,0)
dispatch(fetchSingleInfluencer(id))
dispatch(userFetchBookings())



    },[])

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-purple-600 to-purple-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={SingleInfluencer.profilepic}
                  alt={''}
                  className="w-48 h-48 rounded-2xl object-cover shadow-xl"
                />
                <span className="absolute bottom-2 right-2 bg-green-500 p-1 rounded-full">
                  <CheckCircle className="w-5 h-5" />
                </span>
              </div>
  
              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold"> Influencer name : { SingleInfluencer.name}</h1>
                
                <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-4 text-purple-100">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-1" />
                  { SingleInfluencer.location}
                  </div>
                  <div className="flex items-center">
                    <Instagram className="w-5 h-5 mr-1" />
                    Influencer Instagram : {SingleInfluencer.instagram_handle}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-1" />
                    {SingleInfluencer.followers} 
                  </div>
                </div>
  
                <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <span className="px-4 py-2 bg-purple-500 rounded-full text-sm font-medium">
                    {SingleInfluencer.niche}
                  </span>
                  <span className="px-4 py-2 bg-purple-500 rounded-full text-sm font-medium">
                   {SingleInfluencer.rate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
     
              </div>
  
              {/* Recent Work */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Work</h2>
              </div>
            </div>
  
            {/* Right Column - Booking Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
                <h2 className="text-xl font-semibold mb-4">Book Now</h2>
              {(
                  <button
                    onClick={() => HandleBookInfluencer(id)}
                    disabled = {!SingleInfluencer.isActive}
                       className='w-full text-white py-3 px-4 rounded-lg transition duration-150 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-500  disabled:cursor-not-allowed' 
                  >
                  {!SingleInfluencer.isActive ? 'Booked' : 'Book Now'}
                  </button>
                ) }
              </div>
            </div>
          </div>

          


          {/* {!SingleInfluencer.isActive ?   <CommentSection/> :  <p className='w-full border p-3 border-purple-200 text-4xl text-black my-4'>You can Comment Once you Booked</p>} */}
          {SingleInfluencer._id === userbooking[0]?.influencer._id ?   <CommentSection/> :  <p className='w-full border p-3 border-purple-200 text-4xl text-black my-4'>You can Comment Once you Booked</p>}


          {/* {user ?   <CommentSection/> :  <p className='w-full border p-3 border-purple-200 text-4xl text-black my-4'>You can Comment Once you Booked</p>} */}
        
        </div>
      </div>
    );
}

export default Influencer


