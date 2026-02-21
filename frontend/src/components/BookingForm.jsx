import { useState } from 'react';
import { StarIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const BookingForm = ({ listing }) => {
  const [guests, setGuests] = useState(1);

  return (
    <div className="bg-white rounded-xl border p-6 shadow-xl flex flex-col gap-4 sticky top-28">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
          <div className="text-xl font-bold">₹{listing.price?.toLocaleString('en-IN')}</div>
          <div className="font-light text-neutral-600">night</div>
        </div>
        <div className="flex flex-row items-center gap-1 text-sm">
          <StarIcon className="w-4 h-4" />
          <span className="font-semibold">4.92</span>
          <span className="text-neutral-500 underline">· {listing.reviews?.length || 0} reviews</span>
        </div>
      </div>

      <div className="border rounded-xl mt-4">
        <div className="grid grid-cols-2">
          <div className="p-3 border-r border-b cursor-pointer hover:bg-neutral-50 rounded-tl-xl transition">
             <div className="text-[10px] font-bold uppercase">Check-in</div>
             <div className="text-sm">5/22/2026</div>
          </div>
          <div className="p-3 border-b cursor-pointer hover:bg-neutral-50 rounded-tr-xl transition">
             <div className="text-[10px] font-bold uppercase">Checkout</div>
             <div className="text-sm">5/27/2026</div>
          </div>
        </div>
        <div className="p-3 flex flex-row items-center justify-between cursor-pointer hover:bg-neutral-50 rounded-b-xl transition">
           <div>
              <div className="text-[10px] font-bold uppercase">Guests</div>
              <div className="text-sm">1 guest</div>
           </div>
           <ChevronDownIcon className="w-4 h-4" />
        </div>
      </div>

      <button className="w-full py-3 bg-airbnb-primary text-white font-semibold rounded-lg hover:opacity-90 transition mt-2">
        Reserve
      </button>

      <div className="text-center text-sm font-light text-neutral-500 mt-2">
        You won't be charged yet
      </div>

      <div className="flex flex-col gap-4 mt-4">
         <div className="flex flex-row items-center justify-between font-light">
            <div className="underline decoration-neutral-300">₹{listing.price?.toLocaleString('en-IN')} x 5 nights</div>
            <div>₹{(listing.price * 5)?.toLocaleString('en-IN')}</div>
         </div>
         <div className="flex flex-row items-center justify-between font-light">
            <div className="underline decoration-neutral-300">Cleaning fee</div>
            <div>₹500</div>
         </div>
         <div className="flex flex-row items-center justify-between font-light border-b pb-4">
            <div className="underline decoration-neutral-300">Roamara service fee</div>
            <div>₹1,200</div>
         </div>
         <div className="flex flex-row items-center justify-between font-bold text-lg">
            <div>Total before taxes</div>
            <div>₹{(listing.price * 5 + 1700)?.toLocaleString('en-IN')}</div>
         </div>
      </div>
    </div>
  );
};

export default BookingForm;
