import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 h-20 flex items-center">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 w-full">
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group">
            <div className="text-airbnb-primary">
              <img 
                src="/airbnb-color-svgrepo-com.svg" 
                alt="Roamara Logo" 
                className="h-8 w-8 object-contain"
              />
            </div>
            <span className="text-airbnb-primary text-xl font-bold hidden md:block">roamara</span>
          </Link>

          {/* Search Pill */}
          <div className="border w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex flex-row items-center justify-between">
              <div className="text-sm font-semibold px-6 border-x flex-1 text-center">
                Anywhere
              </div>
              <div className="hidden sm:block text-sm font-semibold px-6 border-r flex-1 text-center">
                Any Week
              </div>
              <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                <div className="hidden sm:block">Add Guests</div>
                <div className="p-2 bg-airbnb-primary rounded-full text-white">
                  <MagnifyingGlassIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex flex-row items-center gap-3">
            <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              Roamara your home
            </div>
            <div className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
              <Bars3Icon className="w-5 h-5" />
              <div className="hidden md:block">
                {user ? (
                  <div className="flex items-center gap-3">
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.username} className="w-8 h-8 rounded-full border border-gray-200" />
                    ) : (
                      <UserCircleIcon className="w-8 h-8 text-gray-500" />
                    )}
                    <button 
                      onClick={logout}
                      className="text-sm font-semibold hover:text-airbnb-primary transition cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link to="/login" className="flex items-center gap-1">
                    <UserCircleIcon className="w-8 h-8 text-gray-500" />
                    <span className="text-sm font-semibold">Login</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;