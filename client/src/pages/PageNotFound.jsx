// import React from 'react'

// const PageNotFound = () => {
//   return (
//     <div>PageNotFound</div>
//   )
// }

// export default PageNotFound

import React, { useEffect, useState } from 'react';
import { Home, MapPin, MoveLeft } from 'lucide-react';
import { Link } from 'react-router';

const PageNotFound = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Update document title
    document.title = "Page Not Found | 404";
    
    // return () => {
    //   document.title = "Vite + React + TS";
    // };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden flex items-center justify-center">

      
      <div className="container relative mx-auto px-6 py-12 z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* 404 Number */}
            <h1 className="text-9xl md:text-[12rem] lg:text-[16rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-white tracking-tighter leading-none">
              404
            </h1>
            
            {/* Error message */}
            <h2 className="mt-8 text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight">
              Looks like you've ventured into uncharted territory
            </h2>
            
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved to another URL. 
              Don't worry, we'll help you find your way back.
            </p>
            
       
            
            {/* Action buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
      
              
              <Link to={'/'}  >
              <button 
                className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium transition-all hover:bg-white/20 active:scale-[0.98]"
              >
                <MoveLeft size={18} className="transition-transform group-hover:-translate-x-0.5" />
                Go Back
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default PageNotFound;