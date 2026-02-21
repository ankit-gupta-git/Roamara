import { useEffect, useState } from 'react';
import { useAuth } from "@clerk/clerk-react";
import ListingCard from '../components/ListingCard';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const { getToken } = useAuth();

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const token = await getToken();
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || "http://localhost:8080"}/api/bookings/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (data.success) {
                    setBookings(data.bookings);
                }
            } catch (error) {
                console.error("Failed to fetch bookings", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, [getToken]);

    if(loading) {
         return (
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500"></div>
            </div>
          );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>
            {bookings.length === 0 ? (
                <div className="text-center py-12">
                     <p className="text-gray-500 text-lg">No bookings found.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bookings.map((booking) => (
                        <div key={booking._id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                             {/* Reusing listing card style or custom */}
                             <div className="relative h-48">
                                <img 
                                    src={booking.listing.image.url} 
                                    alt={booking.listing.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                    {booking.status}
                                </div>
                             </div>
                             <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-900 truncate mb-1">{booking.listing.title}</h3>
                                <div className="flex items-center text-gray-500 text-sm mb-3">
                                    <i className="fas fa-map-marker-alt mr-2 text-red-500"></i>
                                    {booking.listing.location}, {booking.listing.country}
                                </div>
                                <div className="border-t border-gray-100 pt-3 space-y-2">
                                     <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Check-in</span>
                                        <span className="font-medium text-gray-900">{new Date(booking.startDate).toLocaleDateString()}</span>
                                     </div>
                                     <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Check-out</span>
                                        <span className="font-medium text-gray-900">{new Date(booking.endDate).toLocaleDateString()}</span>
                                     </div>
                                     <div className="flex justify-between text-sm pt-2 border-t border-gray-100 mt-2">
                                        <span className="font-bold text-gray-900">Total Price</span>
                                        <span className="font-bold text-red-600">₹{booking.totalPrice.toLocaleString('en-IN')}</span>
                                     </div>
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookings;
