import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-3">
                <i className="fa-regular fa-compass text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Roamara
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Discover unique homes and experiences around the world. Connect with local hosts and create unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <i className="fab fa-youtube text-lg"></i>
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Safety Information
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Cancellation Options
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Report a Problem
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Community</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Wanderlust Magazine
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Diversity & Belonging
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Host Resources
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Community Forum
                </Link>
              </li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Hosting</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/signup" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Become a Host
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Host Protection
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Responsible Hosting
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-pink-400 transition-colors text-sm">
                  Join a Webinar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4 text-white">Stay in the loop</h3>
            <p className="text-gray-300 text-sm mb-6">
              Get the latest news, travel tips, and exclusive offers sent to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-400"
              />
              <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-r-lg hover:from-red-600 hover:to-pink-600 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Wanderlust, Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Cookie Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;