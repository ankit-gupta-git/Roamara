import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const ListingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
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
      const response = await axios.get(`http://localhost:8080/api/listings/${id}`);
      setListing(response.data.listing);
      setLoading(false);
    } catch (err) {
      setError('Failed to load listing');
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      try {
        await axios.delete(`http://localhost:8080/api/listings/${id}`);
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
      await axios.post(`http://localhost:8080/api/listings/${id}/reviews`, {
        review: newReview
      });
      setNewReview({ rating: 1, comment: '' });
      fetchListing(); // Refresh to show new review
    } catch (err) {
      alert('Failed to add review');
    } finally {
      setSubmittingReview(false);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      try {
        await axios.delete(`http://localhost:8080/api/listings/${id}/reviews/${reviewId}`);
        fetchListing(); // Refresh to remove deleted review
      } catch (err) {
        alert('Failed to delete review');
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500"></div>
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

  const isOwner = user && listing.owner._id === user.id;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{listing.title}</h1>
        <p className="text-gray-600">{listing.location}, {listing.country}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <img
            src={listing.image?.url}
            alt={listing.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">About this place</h2>
            <p className="text-gray-700">{listing.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                ₹{listing.price?.toLocaleString('en-IN')}
              </p>
              <p className="text-gray-600">per night</p>
            </div>
            <div className="text-sm text-gray-600">
              Owned by <span className="font-medium">{listing.owner.username}</span>
            </div>
          </div>

          {isOwner && (
            <div className="flex space-x-4 pt-4">
              <Link
                to={`/listings/${id}/edit`}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Edit
              </Link>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">Reviews</h2>

        {user && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({...newReview, rating: parseInt(e.target.value)})}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs"
                >
                  {[1,2,3,4,5].map(num => (
                    <option key={num} value={num}>{num} star{num !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comment
                </label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  required
                  rows={4}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                  placeholder="Share your experience..."
                />
              </div>

              <button
                type="submit"
                disabled={submittingReview}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
              >
                {submittingReview ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>
        )}

        <div className="space-y-4">
          {listing.reviews?.map((review) => (
            <div key={review._id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold">@{review.author.username}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>

                {user && review.author._id === user.id && (
                  <button
                    onClick={() => handleDeleteReview(review._id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}

          {(!listing.reviews || listing.reviews.length === 0) && (
            <p className="text-gray-500 text-center py-8">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;