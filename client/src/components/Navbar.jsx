import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../features/auth/authSlice';
import { SquareUserRound } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const {user} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  

  const handleLogout = () => {
dispatch(logOut())
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to={'/'}>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              InfluenceAdda
            </h1>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          {/* Desktop View */}


          <div className="hidden md:flex items-center space-x-2">
            {!user ? (   <Link to={'/login'}>
              <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all">
                Log In
              </button>
            </Link>) :    <Link to={ user.isAdmin ?   '/admin' : '/profile'}>
              <button className="bg-gradient-to-r flex gap-1 from-violet-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all">
                <SquareUserRound />
                {user.name} 
               
              </button>
            </Link>}
          
            <Link to={'/'}> {/* Assuming your logout route is /logout */}
              <button  onClick={handleLogout} className="bg-gradient-to-r from-violet-900 to-purple-900 text-white px-4 py-2 rounded-lg items-center flex hover:from-violet-700 hover:to-purple-700 transition-all">
                LogOut {/* Assuming LogOut is a component you've defined */}
              </button>
            </Link>
          </div>

          {/* Mobile View (Hamburger Menu) */}
          <div className="md:hidden ">
            <button
              className="outline-none focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
            {isMobileMenuOpen && (
              <div className="absolute top-16 right-0 bg-white shadow-md rounded-md w-48 py-2 flex flex-col z-10 items-start">
                <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                  Log In
                </Link>
                <Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                  LogOut {/* Assuming LogOut is a component you've defined */}
                </Link>
                {/* Add more mobile menu items here */}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;