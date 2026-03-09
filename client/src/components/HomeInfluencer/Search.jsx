import React from 'react'
import { Search, MapPin, Users, Filter, ChevronDown, Mail, Bookmark, ExternalLink, Instagram, Youtube, Twitter, Sun, Moon } from 'lucide-react';


const SearchInfluencer = () => {
  return (
    <div className="bg-white rounded-xl  my-[80px] shadow-lg p-6 mb-12">
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search influencers..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent">
          <option>Followers</option>
          <option>0-100K</option>
          <option>100K-500K</option>
          <option>500K-1M</option>
          <option>1M+</option>
        </select>
        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent">
          <option>Niche</option>
          <option>Fashion</option>
          <option>Tech</option>
          <option>Lifestyle</option>
          <option>Gaming</option>
        </select>
        <select className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent">
          <option>Location</option>
          <option>North America</option>
          <option>Europe</option>
          <option>Asia</option>
          <option>Other</option>
        </select>
      </div>
    </div>
  </div>
  )
}

export default SearchInfluencer