import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 via-pink-500 to-rose-500 pt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Find your next stay
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 font-light">
            Discover unique homes and experiences around the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/listings"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              Explore Stays
            </Link>
            {!user && (
              <Link
                to="/signup"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors"
              >
                Become a Host
              </Link>
            )}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-pink-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rose-400/15 rounded-full blur-lg animate-pulse delay-500"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why choose Roamara?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with hosts worldwide and discover unique accommodations and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-home text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Unique Homes</h3>
              <p className="text-gray-600">
                From cozy cabins to luxury villas, find accommodations that match your style and budget
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-globe text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Global Destinations</h3>
              <p className="text-gray-600">
                Explore over 100+ countries and discover hidden gems in destinations worldwide
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Local Experiences</h3>
              <p className="text-gray-600">
                Connect with local hosts and immerse yourself in authentic cultural experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to find your perfect stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Search</h3>
              <p className="text-gray-600">
                Browse thousands of unique accommodations in destinations around the world
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Book</h3>
              <p className="text-gray-600">
                Choose your dates and book directly with verified hosts through our secure platform
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Experience</h3>
              <p className="text-gray-600">
                Enjoy your stay and create unforgettable memories in unique accommodations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 via-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to start your journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join millions of travelers discovering unique stays worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/listings"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              Start Exploring
            </Link>
            {!user && (
              <Link
                to="/signup"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors"
              >
                List Your Property
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Popular Destinations Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular destinations
            </h2>
            <p className="text-xl text-gray-600">
              Discover trending locations loved by travelers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Paris', image: '🏰' },
              { name: 'Tokyo', image: '🏯' },
              { name: 'New York', image: '🗽' },
              { name: 'Bali', image: '🏝️' },
              { name: 'London', image: '🇬🇧' },
              { name: 'Sydney', image: '🦘' },
              { name: 'Rome', image: '🏛️' },
              { name: 'Dubai', image: '🏙️' }
            ].map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 hover:from-red-100 hover:to-pink-100 transition-colors duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-3">{destination.image}</div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                    {destination.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/listings"
              className="inline-flex items-center px-6 py-3 border border-red-500 text-red-600 rounded-full hover:bg-red-500 hover:text-white transition-colors font-medium"
            >
              View All Destinations
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;