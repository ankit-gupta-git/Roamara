import { Link } from 'react-router-dom';

const ListingCard = ({ listing }) => {
  return (
    <Link to={`/listings/${listing._id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img
            src={listing.image?.url || '/placeholder-image.jpg'}
            alt={listing.title}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{listing.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{listing.location}, {listing.country}</p>
          <p className="text-gray-900 font-medium">
            ₹{listing.price?.toLocaleString('en-IN')} / night
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;