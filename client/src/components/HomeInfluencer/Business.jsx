import React from 'react'
import { Search, MapPin, Users, Filter, Mail, Bookmark, ExternalLink, Instagram, Youtube, Twitter } from 'lucide-react';

const Business = () => {
  return (
    <div className="mb-24 text-center">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
        Grow Your Business with Influencer Marketing
      </h2>
      <p className="text-xl text-gray-900 mb-12">
        Connect with the right influencers to reach your target audience and achieve your marketing goals
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-violet-600 mb-4">
            <Users size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Reach Millions</h3>
          <p className="text-gray-600">Access a vast network of influencers with engaged audiences</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-violet-600 mb-4">
            <Filter size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Perfect Match</h3>
          <p className="text-gray-600">Find creators that align with your brand values and style</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-violet-600 mb-4">
            <ExternalLink size={32} />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Track Results</h3>
          <p className="text-gray-600">Measure campaign performance and ROI in real-time</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Business