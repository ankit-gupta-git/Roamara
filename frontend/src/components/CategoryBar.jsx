import { useRef } from 'react';
import { 
  TvIcon, 
  HomeIcon, 
  FireIcon, 
  SparklesIcon, 
  SunIcon, 
  BuildingOfficeIcon,
  CircleStackIcon,
  CloudIcon,
  TicketIcon,
  MapIcon
} from "@heroicons/react/24/outline";

const categories = [
  { label: 'Caves', icon: MapIcon },
  { label: 'Cabins', icon: HomeIcon },
  { label: 'Amazing views', icon: SparklesIcon },
  { label: 'Top cities', icon: BuildingOfficeIcon },
  { label: 'Luxe', icon: TicketIcon },
  { label: 'Containers', icon: CircleStackIcon },
  { label: 'Trending', icon: FireIcon },
  { label: 'New', icon: SparklesIcon },
  { label: 'Historical homes', icon: BuildingOfficeIcon },
  { label: 'Earth homes', icon: CloudIcon },
  { label: 'Boats', icon: TvIcon },
  { label: 'Desert', icon: SunIcon },
  { label: 'Barns', icon: HomeIcon },
  { label: 'Arctic', icon: CloudIcon },
];

const CategoryBar = ({ show = true }) => {
  const scrollRef = useRef(null);

  return (
    <div className={`
      bg-white sticky top-20 z-40 border-b py-4 shadow-sm transition-all duration-300
      ${show ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}
    `}>
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex flex-row items-center justify-between overflow-x-auto scrollbar-hide gap-8">
          {categories.map((item) => (
            <div 
              key={item.label}
              className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 border-transparent hover:text-neutral-800 transition cursor-pointer hover:border-neutral-800 text-neutral-500 whitespace-nowrap group"
            >
              <item.icon className="w-6 h-6 group-hover:scale-110 transition" />
              <div className="font-medium text-xs">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
