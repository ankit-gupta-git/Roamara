import { Link } from 'react-router-dom';
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const ListingCard = ({ listing }) => {
  // Use unsplash images based on listing index or title if available, otherwise placeholder
  const imageUrl = listing.image?.url || `https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80`;

  return (
    <div className="col-span-1 cursor-pointer group">
      <Link to={`/listings/${listing._id}`} className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <img
            src={imageUrl}
            alt={listing.title}
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartIcon className="w-7 h-7 text-white/70 hover:text-white transition fill-black/20" />
          </div>
          {listing.price > 5000 && (
            <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
              Guest favourite
            </div>
          )}
        </div>
        
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <div className="font-semibold text-base truncate">
              {listing.location}, {listing.country}
            </div>
            <div className="flex flex-row items-center gap-1">
              <StarIcon className="w-3 h-3" />
              <span className="text-sm font-light">4.92</span>
            </div>
          </div>
          <div className="font-light text-neutral-500 text-sm">
            8,028 km away
          </div>
          <div className="font-light text-neutral-500 text-sm">
            May 19 - 24
          </div>
          <div className="flex flex-row items-center gap-1 mt-1">
            <div className="font-semibold text-sm">
              ₹{listing.price?.toLocaleString('en-IN')}
            </div>
            <div className="font-light text-sm">night</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;