import React from 'react'

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
      <p className="text-lg font-semibold text-gray-800">Searching for Influencers...</p>
      <p className="text-gray-600 text-sm">Hang tight while we find the perfect matches.</p>
    </div>
  </div>
  )
}

export default Loading