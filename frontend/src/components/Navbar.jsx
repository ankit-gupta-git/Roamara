import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, useUser, SignInButton } from "@clerk/clerk-react";
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 h-20 flex items-center">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 w-full">
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group">
            <div className="text-airbnb-primary">
              <svg 
                viewBox="0 0 32 32" 
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true" 
                role="presentation" 
                focusable="false" 
                className="block h-8 w-8 fill-current"
              >
                <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.393 3.42-6.413 3.613l-.272.017-.234.004c-3.48 0-6.358-2.416-6.358-6.478 0-1.266.388-2.464 1.114-3.874l.117-.22 7.101-14.836c1.288-2.306 2.743-3.269 4.751-3.269zm0 2.667c-1.117 0-2.008.566-2.903 2.221l-.037.073L5.942 20.812c-.52.934-.809 1.776-.809 2.655 0 2.486 1.745 3.811 3.784 3.811 1.417 0 2.955-.845 4.622-2.523l.311-.328c.453-.483.92-.483 1.373 0l.332.352c1.7 1.724 3.235 2.5 4.622 2.5 2.039 0 3.784-1.325 3.784-3.811 0-.879-.289-1.721-.806-2.651l-.042-.077L18.94 5.961c-.895-1.655-1.786-2.221-2.903-2.221l-.037.073zM16 9c2.206 0 4 1.794 4 4 0 2.206-1.794 4-4 4s-4-1.794-4-4c0-2.206 1.794-4 4-4zm0 2.667c-1.117 0-2.008.566-2.903 2.221l-.037.073L10.375 20.812c-.52.934-.809 1.776-.809 2.655 0 2.486 1.745 3.811 3.784 3.811 1.417 0 2.955-.845 4.622-2.523l.311-.328c.453-.483.92-.483 1.373 0l.332.352c1.7 1.724 3.235 2.5 4.622 2.5 2.039 0 3.784-1.325 3.784-3.811 0-.879-.289-1.721-.806-2.651l-.042-.077L18.94 5.961c-.895-1.655-1.786-2.221-2.903-2.221z"></path>
              </svg>
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
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                  <UserCircleIcon className="w-8 h-8 text-gray-500" />
                </SignedOut>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;