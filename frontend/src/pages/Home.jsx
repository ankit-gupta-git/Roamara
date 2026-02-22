import { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryBar from '../components/CategoryBar';
import ListingCard from '../components/ListingCard';
import { mockListings } from '../mockData';

const Home = () => {
  const [listings, setListings] = useState(mockListings);
  const [loading, setLoading] = useState(false); // Set to false since we have mock data
  const [error, setError] = useState(null);
  const [showFilters, setShowFilters] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    fetchListings();
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 0) {
        setShowFilters(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowFilters(false);
      } else if (currentScrollY < lastScrollY) {
        setShowFilters(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const fetchListings = async () => {
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080';
      const response = await axios.get(`${backendUrl}/api/listings`);
      if (response.data.listings && response.data.listings.length > 0) {
        setListings(response.data.listings);
      }
    } catch (err) {
      console.log('Backend not reachable, using mock data');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <CategoryBar show={showFilters} />
      
      <main className="flex-1 pb-20 pt-4">
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {listings.map((listing) => (
              <ListingCard key={listing._id} listing={listing} />
            ))}
          </div>
        </div>
      </main>

      {listings.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <h2 className="text-xl font-semibold">No listings found</h2>
            <p className="text-neutral-500">Try adjusting your filters or search.</p>
          </div>
        )}
      
      {/* Show Map Button (Floating) */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-30">
        <button className="bg-airbnb-black text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2">
          Show map <i className="fa-solid fa-map"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;