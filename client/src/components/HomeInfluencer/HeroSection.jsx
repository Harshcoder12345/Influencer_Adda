import React from 'react'
import { Search, MapPin, Users, Filter, ChevronDown, Mail, Bookmark, ExternalLink, Instagram, Youtube, Twitter, Sun, Moon } from 'lucide-react';
import Rajwadaimg from '../../assets/Rajwadaimg.jpg'


const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <img
        // src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        src={Rajwadaimg}
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h2 className="text-6xl font-extrabold text-white mb-6 leading-tight">
        Connect with <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Perfect Creators</span><br />
        For Your Brand
      </h2>
      <p className="text-2xl text-gray-300 mb-12 font-light max-w-3xl mx-auto">
        Find and collaborate with influencers who share your vision and can amplify your message to the right audience
      </p>
      <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all transform hover:scale-105">
        Get Started Today
      </button>
    </div>
  </div>
  )
}

export default HeroSection