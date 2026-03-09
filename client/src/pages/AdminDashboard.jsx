import React, { useEffect, useState } from 'react';
import { Users, Calendar, MessageSquare, DollarSign, UserCheck } from 'lucide-react';
import Allinfluencers from '../components/admin/Allinfluencers';
import Allbooking from '../components/admin/AllBooking'
import Allcomments from '../components/admin/Allcomments'
import { useDispatch, useSelector } from 'react-redux';
import {  adminFetchAllComments, adminFetchAllUsers, adminFetchBookings, adminFetchInfluencer } from '../features/admin/adminSlice';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';
import AllUsers from '../components/admin/AllUsers';
import { useNavigate } from 'react-router';



// Mock data





const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('influencers');
  const {totalinfluencers, totalbookings,totalusers , totalcomments} = useSelector(state => state.admin)
  const {user, isLoading, isError, message } = useSelector(state => state.auth)

 const navigate = useNavigate()

  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(adminFetchAllUsers())
      dispatch(adminFetchInfluencer())
      dispatch(adminFetchBookings())
      dispatch(adminFetchAllComments())
    }, [])
 
  useEffect(() => {

    if(!user){
      navigate('/login')
    }
    if(isError && message){
  toast.error(message, {position : "top-center"})
}

  }, [isError, message, user])

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl text-center font-bold text-purple-600">Admin Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Influencers</p>
                <h3 className="text-2xl font-bold text-purple-600">{totalinfluencers.length}</h3>
              </div>
              <Users className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Users</p>
                <h3 className="text-2xl font-bold text-purple-600">{totalusers.length}</h3>
              </div>
              <UserCheck className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Booking</p>
                <h3 className="text-2xl font-bold text-purple-600">{totalbookings.length} </h3>
              </div>
              <UserCheck className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Comments  </p>
                <h3 className="text-2xl font-bold text-purple-600">{totalcomments.length}</h3>
              </div>
              <UserCheck className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Revenue</p>
                <h3 className="text-2xl font-bold text-purple-600">${}</h3>
              </div>
              <DollarSign className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('influencers')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'influencers' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'
            }`}
          >
            <Users className="w-5 h-5 mr-2" />
            Influencers
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'bookings' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'
            }`}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Bookings
          </button>
          <button
            onClick={() => setActiveTab('comments')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'comments' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'
            }`}
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Comments
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'users' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'
            }`}
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Users
          </button>
        </div>

        {/* Content Sections */}
        {activeTab === 'influencers' && <Allinfluencers/>}
        {activeTab === 'bookings' && <Allbooking/>}
        {activeTab === 'comments' && <Allcomments />}
        {activeTab === 'users' && <AllUsers />}
      </main>
    </div>
  );
}

export default AdminDashboard ;