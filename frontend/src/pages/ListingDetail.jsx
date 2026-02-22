import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "../context/AuthContext";
import { StarIcon, ShareIcon, HeartIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import BookingForm from '../components/BookingForm';
import { mockListings } from '../mockData';

const ListingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newReview, setNewReview] = useState({ rating: 1, comment: '' });
  const [submittingReview, setSubmittingReview] = useState(false);

  useEffect(() => {
    fetchListing();
  }, [id]);

  const fetchListing = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL || "http://localhost:8080"}/api/listings/${id}`);
      setListing(response.data.listing);
      setLoading(false);
    } catch (err) {
      console.log('Backend not reachable, checking mock data');
      const mockListing = mockListings.find(l => l._id === id);
      if (mockListing) {
        setListing(mockListing);
        setLoading(false);
      } else {
        setError('Failed to load listing');
        setLoading(false);
      }
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      try {
        await axios.delete(`${import.meta.env.VITE_BACKEND_URL || "http://localhost:8080"}/api/listings/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        navigate('/listings');
      } catch (err) {
        alert('Failed to delete listing');
      }
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setSubmittingReview(true);

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL || "http://localhost:8080"}/api/listings/${id}/reviews`, {
        review: {
            ...newReview,
            authorName: user.username,
            authorAvatar: user.avatar
        }
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNewReview({ rating: 1, comment: '' });
      fetchListing();
    } catch (err) {
      alert('Failed to add review');
    } finally {
      setSubmittingReview(false);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      try {
        await axios.delete(`${import.meta.env.VITE_BACKEND_URL || "http://localhost:8080"}/api/listings/${id}/reviews/${reviewId}`, {
             headers: { Authorization: `Bearer ${token}` }
        });
        fetchListing();
      } catch (err) {
        alert('Failed to delete review');
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-airbnb-primary"></div>
      </div>
    );
  }

  if (error || !listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">{error || 'Listing not found'}</div>
      </div>
    );
  }

  const isOwner = user && listing.owner === user.id;

  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-8">
      {/* Title and Share/Save */}
      <div className="flex flex-col gap-1 mb-6">
        <h1 className="text-2xl font-semibold text-neutral-800">{listing.title}</h1>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center gap-2 text-sm font-semibold underline cursor-pointer">
            <StarIcon className="w-4 h-4" />
            <span>4.92</span>
            <span>·</span>
            <span>{listing.reviews?.length || 0} reviews</span>
            <span>·</span>
            <span className="font-semibold">{listing.location}, {listing.country}</span>
          </div>
          <div className="flex flex-row items-center gap-4">
            <button className="flex items-center gap-2 underline text-sm font-semibold p-2 hover:bg-neutral-100 rounded-lg transition">
              <i className="fa-solid fa-arrow-up-from-bracket w-4 h-4"></i> Share
            </button>
            <button className="flex items-center gap-2 underline text-sm font-semibold p-2 hover:bg-neutral-100 rounded-lg transition">
              <HeartOutline className="w-4 h-4" /> Save
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[450px] overflow-hidden rounded-xl mb-12">
        <div className="col-span-1 h-full">
           <img 
            src={listing.image?.url || `https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80`}
            alt={listing.title}
            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
          />
        </div>
        <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-2 h-full">
           {[1,2,3,4].map((i) => (
             <img 
               key={i}
               src={`https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80&sig=${i}`}
               alt={`${listing.title}-${i}`}
               className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
             />
           ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-12">
        {/* Left Column */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <div className="flex flex-row items-center justify-between border-b pb-8">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold">Entire home hosted by {listing.ownerName || "Host"}</h2>
              <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
                <div>6 guests</div>
                <div>3 bedrooms</div>
                <div>3 beds</div>
                <div>2 bathrooms</div>
              </div>
            </div>
            {listing.ownerAvatar ? (
               <img src={listing.ownerAvatar} alt="Host" className="w-12 h-12 rounded-full" />
            ) : (
               <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500">
                  <i className="fa-solid fa-user"></i>
               </div>
            )}
          </div>

          <div className="flex flex-col gap-6 py-6 border-b">
             <div className="flex flex-row items-start gap-4">
                <div className="p-1"><i className="fa-solid fa-door-open text-xl"></i></div>
                <div>
                   <div className="font-semibold">Self check-in</div>
                   <div className="text-neutral-500 text-sm">Check yourself in with the lockbox.</div>
                </div>
             </div>
             <div className="flex flex-row items-start gap-4">
                <div className="p-1"><i className="fa-solid fa-location-dot text-xl"></i></div>
                <div>
                   <div className="font-semibold">Great location</div>
                   <div className="text-neutral-500 text-sm">95% of recent guests gave the location a 5-star rating.</div>
                </div>
             </div>
             <div className="flex flex-row items-start gap-4">
                <div className="p-1"><i className="fa-solid fa-calendar text-xl"></i></div>
                <div>
                   <div className="font-semibold">Free cancellation before May 12</div>
                </div>
             </div>
          </div>

          <div className="flex flex-col gap-4 py-8 border-b">
             <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156fa93.jpg" alt="AirCover" className="h-6 w-24 object-contain" />
             <p className="font-light text-neutral-500">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
             <button className="underline font-semibold w-fit">Learn more</button>
          </div>

          <div className="flex flex-col gap-4 py-8 border-b">
             <h2 className="text-xl font-semibold">About this place</h2>
             <p className="font-light text-neutral-600 leading-relaxed">{listing.description}</p>
          </div>

          {isOwner && (
            <div className="flex flex-row items-center gap-4 py-4">
               <Link to={`/listings/${id}/edit`} className="underline font-semibold text-blue-600">Edit listing</Link>
               <button onClick={handleDelete} className="underline font-semibold text-red-600">Delete listing</button>
            </div>
          )}
        </div>

        {/* Right Column - Booking Sidebar */}
        <div className="md:col-span-3">
          <div className="md:sticky md:top-28">
             <BookingForm listing={listing} />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-12 border-t mt-12">
         <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
            <StarIcon className="w-5 h-5 text-neutral-800" />
            4.92 · {listing.reviews?.length || 0} reviews
         </h2>

         {user && !isOwner && (
            <div className="mb-12 max-w-xl">
               <h3 className="text-lg font-semibold mb-4">Add a review</h3>
               <form onSubmit={handleReviewSubmit} className="flex flex-col gap-4">
                  <div className="flex gap-1">
                     {[1,2,3,4,5].map(num => (
                        <button 
                           key={num}
                           type="button" 
                           onClick={() => setNewReview({...newReview, rating: num})}
                           className={`text-2xl ${newReview.rating >= num ? 'text-airbnb-primary' : 'text-neutral-300'}`}
                        >
                           ★
                        </button>
                     ))}
                  </div>
                  <textarea 
                     value={newReview.comment}
                     onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                     className="border rounded-md p-3 w-full h-32 focus:ring-2 focus:ring-airbnb-primary outline-none"
                     placeholder="Write your review..."
                  />
                  <button 
                     type="submit" 
                     disabled={submittingReview}
                     className="bg-airbnb-primary text-white font-semibold py-3 px-6 rounded-lg w-fit disabled:opacity-50 hover:opacity-90 transition"
                  >
                     {submittingReview ? 'Submitting...' : 'Post review'}
                  </button>
               </form>
            </div>
         )}

         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {listing.reviews?.map((review) => (
               <div key={review._id} className="flex flex-col gap-4">
                  <div className="flex flex-row items-center gap-3">
                     {review.authorAvatar ? (
                        <img src={review.authorAvatar} alt="Author" className="w-12 h-12 rounded-full" />
                     ) : (
                        <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500">
                           <i className="fa-solid fa-user"></i>
                        </div>
                     )}
                     <div className="flex flex-col">
                        <div className="font-semibold">{review.authorName || "Guest"}</div>
                        <div className="text-sm text-neutral-500">{new Date(review.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
                     </div>
                  </div>
                  <p className="font-light text-neutral-600">{review.comment}</p>
                  {user && review.author === user.id && (
                     <button onClick={() => handleDeleteReview(review._id)} className="text-xs underline text-red-500 w-fit">Delete</button>
                  )}
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default ListingDetail;