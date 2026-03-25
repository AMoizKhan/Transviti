
// import { MapPin, Clock, Bookmark } from "lucide-react";

// export default function Cards() {
//   return (
//     <div className="w-[195px] h-[160px] max-md:shrink-0 max-md:snap-start  p-[10px_20px_10px_20px] bg-white rounded-[10px] border border-gray-200 flex flex-col  shadow-md">
      
//       {/* Top Prompt */}
//       <h3 className="text-sm font-semibold text-gray-800">Prompt</h3>

//       {/* Image + Role */}
//       <div className="flex items-center gap-3">
//         <img
//           src="/images/teams.png"
//           alt="profile"
//           className="w-10 h-10 rounded-full object-cover"
//         />
//         <div className="flex flex-col">
//           <span className="font-semibold text-[12px] text-gray-800">UI/UX Designer</span>
//           <span className="text-gray-500 text-[12px]">Teams</span>
//         </div>
//       </div>

//       {/* Location */}
//       <div className="flex mt-2 items-center gap-2 text-gray-500 text-[12px]">
//         <MapPin size={16} />
//         <span>Seattle, USA (Remote)</span>
//       </div>

//       {/* Time + Applications */}
//       <div className="flex items-centermt-2 gap-2 text-gray-500 text-[9px]">
//         <Clock size={16} />
//         <span>
//           1 day ago | <span className="text-[#0154AA]">22 applications</span>
//         </span>
//       </div>

//       {/* Apply Button + Save Icon */}
//       <div className="flex items-center justify-between mt-2 gap-6">
//         <button className="bg-[#0154AA] w-[160px] text-white px-3 py-1.5 text-xs rounded-lg hover:bg-bg-[#0154AB]">
//           Apply Now
//         </button>
//         <Bookmark  className=" text-gray-500 cursor-pointer" />
//       </div>

//     </div>
//   );
// }

"use client";
import { MapPin, Clock, Bookmark } from "lucide-react";

export default function Cards() {
  return (
    <div className="w-[195px] h-[180px] p-4 bg-white rounded-[10px] border border-gray-200 flex flex-col shadow-md
                    max-md:w-[160px] max-md:h-[220px] max-md:flex-shrink-0 max-md:snap-start">
      
      {/* Top Prompt */}
      <h3 className="text-sm font-semibold text-gray-800">Prompt</h3>

      {/* Image + Role */}
      <div className="flex items-center gap-2 mt-2">
        <img
          src="/images/teams.png"
          alt="profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-[12px] text-gray-800">UI/UX Designer</span>
          <span className="text-gray-500 text-[12px]">Teams</span>
        </div>
      </div>

      {/* Location */}
      <div className="flex mt-2 items-center gap-1 text-gray-500 text-[12px]">
        <MapPin size={16} />
        <span>Seattle, USA (Remote)</span>
      </div>

      {/* Time + Applications */}
      <div className="flex items-center mt-1 gap-1 text-gray-500 text-[10px]">
        <Clock size={16} />
        <span>
          1 day ago | <span className="text-[#0154AA]">22 applications</span>
        </span>
      </div>

      {/* Apply Button + Save Icon */}
      <div className="flex items-center justify-between mt-2 gap-2">
        <button className="bg-[#0154AA] w-[160px] text-white px-3 py-1.5 text-xs rounded-lg hover:bg-[#014a96]
                          max-md:w-[120px] max-md:text-[10px]">
          Apply Now
        </button>
        <Bookmark className="text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
}