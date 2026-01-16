import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ isHomePage }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const navbarClasses = isHomePage
    ? "fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/20"
    : "bg-white border-b border-gray-200 sticky top-0 z-50";

  const textClasses = isHomePage
    ? "text-white hover:text-pink-200"
    : "text-gray-700 hover:text-gray-900";

  const buttonClasses = isHomePage
    ? "bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
    : "bg-red-500 text-white hover:bg-red-600";

  return (
    <nav className={`${navbarClasses} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center group"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-3 group-hover:scale-110 transition-transform">
                <i className="fa-regular fa-compass text-white text-lg"></i>
              </div>
              <span className={`text-xl font-bold ${isHomePage ? 'text-white' : 'text-gray-900'} group-hover:text-red-500 transition-colors`}>
                Roamara
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/listings"
              className={`${textClasses} px-3 py-2 rounded-md text-sm font-medium transition-colors hover:scale-105 transform`}
            >
              Explore
            </Link>

            {user ? (
              <>
                <Link
                  to="/listings/new"
                  className={`${buttonClasses} px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 shadow-lg`}
                >
                  <i className="fas fa-plus mr-2"></i>
                  Rent Home
                </Link>
                <div className="flex items-center space-x-4">
                  <span className={`${isHomePage ? 'text-white' : 'text-gray-700'} text-sm`}>
                    Welcome, {user.username}
                  </span>
                  <button
                    onClick={handleLogout}
                    className={`${textClasses} px-3 py-2 rounded-md text-sm font-medium transition-colors hover:scale-105`}
                  >
                    <i className="fas fa-sign-out-alt mr-1"></i>
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/signup"
                  className={`${textClasses} px-3 py-2 rounded-md text-sm font-medium transition-colors hover:scale-105`}
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className={`${buttonClasses} px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 shadow-lg`}
                >
                  Login
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className={`${isHomePage ? 'text-white' : 'text-gray-700'} hover:text-red-500 p-2`}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;