import React from 'react'
import { Search, MapPin, Users, Filter, ChevronDown, Mail, Bookmark, ExternalLink, Instagram, Youtube, Twitter, Sun, Moon } from 'lucide-react';

const Fotter = () => {
  return (
    <footer className="bg-gradient-to-br from-violet-900 to-purple-900 text-violet-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">InfluenceHub</h3>
          <p className="text-violet-300 mb-4">
            Connecting brands with the perfect influencers to tell their story.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-violet-300 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-violet-300 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-violet-300 hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-violet-300 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="text-violet-300 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-violet-300 hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="text-violet-300 hover:text-white transition-colors">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-violet-300 hover:text-white transition-colors">Community</a></li>
            <li><a href="#" className="text-violet-300 hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="text-violet-300 hover:text-white transition-colors">Guidelines</a></li>
            <li><a href="#" className="text-violet-300 hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-violet-300 mb-4">Stay updated with the latest influencer marketing trends.</p>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 my-2 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white/10 text-white placeholder-violet-300"
            />
            <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-r-lg hover:from-violet-700 hover:to-purple-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-violet-800 mt-12 pt-8 text-center text-violet-400">
        <p>&copy; 2025 InfluenceHub. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Fotter