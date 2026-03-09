import React, { useEffect } from 'react'
import { Search, MapPin, Users, Filter, Mail, Bookmark, } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { fetchSingleInfluencer } from '../../features/Influ/InfluencerSlice';



const InfluencerCard = () => {

  const { totalinfluencers, } = useSelector(state => state.admin)
  const dispatch = useDispatch()
  // console.log(totalinfluencers, 'total');
  

  const GetInfluencer = (id) => {
    dispatch(fetchSingleInfluencer(id))
  
  }


  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
              {totalinfluencers.map((influencer) => (
                <div key={influencer._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <img
                      src={influencer.profilepic
                      }
                      alt={influencer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{influencer.name}</h3>
                      <span className="flex items-center text-gray-600">
                        <Users size={16} className="mr-1" />
                        {influencer.followers}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin size={16} className="mr-1" />
                      {influencer.location}
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin size={16} className="mr-1" />
                      {influencer.instagram_handle}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 px-3 py-1 rounded-full text-sm">
                        {influencer.niche}
                      </span>
                      <span className="text-gray-900 font-semibold">{influencer.rate} ₹/Day</span>
                    </div>
                    <div className="flex gap-2">
                    <Link to={`/Influencer/${influencer._id}`}>
                      <button onClick={()=>GetInfluencer(influencer._id)} className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all flex items-center justify-center">
                        <Mail size={16} className="mr-2" />
                        Contact
                      </button>
                      </Link>
                      
                      <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                        <Bookmark size={16} />
                      </button>
                    
                    </div>
                  </div>
                </div>
              ))}
            </div>
    
  )
}

export default InfluencerCard