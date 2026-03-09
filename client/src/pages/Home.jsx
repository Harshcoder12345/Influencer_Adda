import React, { useEffect } from 'react'
import { Search, MapPin, Users, Filter, Mail, Bookmark, ExternalLink, Instagram, Youtube, Twitter } from 'lucide-react';
import HeroSection from '../components/HomeInfluencer/HeroSection';
import SearchInfluencer from '../components/HomeInfluencer/Search';
import InfluencerCard from '../components/HomeInfluencer/InfluencerCard';
import Business from '../components/HomeInfluencer/Business';
import { adminFetchAllComments, adminFetchAllUsers, adminFetchBookings, adminFetchInfluencer } from '../features/admin/adminSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';




const Home = () => {

  const dispatch = useDispatch()

  
  const {isLoading, isError, message } = useSelector(state => state.admin)
  const {user} = useSelector(state => state.auth)


 
    useEffect(() => {
      dispatch(adminFetchInfluencer())
    }, [])




  useEffect(() => {
if(isError && message){
  toast.error(message, {position : "top-center"})
}

}, [isError, message])




if(isLoading){
  return <Loading/>
 }
 






  return (

    <>
    
 <HeroSection/>
      {/* Search Section */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 ">
 <SearchInfluencer/>
        {/* Influencer Grid */}
<InfluencerCard/>
       {/* Grow Your Business Section */}
  <Business/>
      </div>

      {/* Footer */}

    </>

      
  )
}

export default Home