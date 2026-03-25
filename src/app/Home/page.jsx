// import Cards from "@/Component/Card";
// import { Search, ChevronDown } from "lucide-react";

// const cardsSliderRow =
// // "flex gap-2 max-md:gap-4 max-md:overflow-x-auto max-md:overscroll-x-contain max-md:snap-x max-md:snap-mandatory max-md:pb-2 max-md:-mx-1 max-md:px-1 max-md:scroll-smooth";
//   "flex mr-4 justify-between max-md:gap-3 max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:pb-2";
// export default function MainPage() {
//     return (
//         <div className=" max-md:mr-0    max-md:max-w-full">
//             {/* Heading */}

//             <div className="w-[644px] h-[48px] max-md:h-auto max-md:w-full max-md:max-w-[644px] flex flex-col gap-[5px] mt-17 max-md:mt-8">
//                 <h1 className="text-3xl max-md:text-2xl font-bold text-black">
//                     Find your dream Job, <span className="text-[#0154AA]">Albert</span>
//                 </h1>

//                 <p className="text-gray-700 max-md:text-sm">
//                     Explore the latest job openings and apply for the best opportunities available today!
//                 </p>
//             </div>

//             {/* Search Section */}
//             <div className="">
//                 <div className="flex mr-4 items-center gap-2 p-4 mt-10 max-md:mt-6  bg-white rounded-xl max-md:flex-col max-md:items-stretch max-md:gap-3">
//                     {/* Job Title Input */}
//                     <div className="flex items-center flex-1 max-md:w-full border border-transparent  py-1 max-md:min-w-0">
//                         <input
//                             type="text"
//                             placeholder="Job Title, Company, or Keyword"
//                             className="w-full outline-none text-gray-500"
//                         />
//                     </div>

//                     {/* Separator */}
//                     <span className="text-gray-300 max-md:hidden">|</span>

//                     {/* Location Dropdown */}
//                     <div className="flex items-center max-md:justify-between border border-transparent max-md:border-gray-100 max-md:rounded-lg px-2 py-3 cursor-pointer text-gray-500">
//                         <span className="mr-2">Select Location</span>
//                         <ChevronDown size={18} className="text-gray-400 shrink-0" />
//                     </div>

//                     {/* Separator */}
//                     <span className="text-gray-300 max-md:hidden">|</span>

//                     {/* Job Type Dropdown */}
//                     <div className="flex items-center max-md:justify-between border border-transparent max-md:border-gray-100 max-md:rounded-lg px-3 py-2 cursor-pointer text-gray-500">
//                         <span className="mr-2">Job Type</span>
//                         <ChevronDown size={18} className="text-gray-400 shrink-0" />
//                     </div>

//                     {/* Search Button */}
//                     <button type="button" className="flex items-center w-[140px] max-md:w-full max-md:justify-center gap-2 bg-[#0154AA] text-white px-4 py-2 rounded-lg hover:bg-[#014a96] shrink-0">
//                         <Search size={18} />
//                         Search
//                     </button>
//                 </div>
//             </div>
//             <div className="flex flex-wrap items-center gap-3 mt-4">
//                 {/* Heading */}
//                 <span className=" text-gray-700">Similar:</span>

//                 {/* Buttons */}
//                 <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 font-medium">
//                     Frontend
//                 </button>
//                 <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 font-medium">
//                     Backend
//                 </button>
//                 <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 font-medium">
//                     Graphic Design
//                 </button>
//             </div>
//             <hr className="mt-4" />
//             <div className="mt-6 flex gap-4 max-md:flex-col max-md:gap-1 max-md:items-start">
//                 <h2 className="text-lg font-normal text-gray-800">Featured Jobs</h2>
//                 <span className="font-semibold  text-sm text-[#0154AA] border-b-2 border-blue-600 cursor-pointer">
//                     See Featured Jobs
//                 </span>
//             </div>
//             <div className={`mt-6 ${cardsSliderRow} `}>
//                 <Cards />
//                 <Cards />
//                 <Cards />
//                 <Cards />
//                 <Cards />
//             </div>
//             <hr className="mt-4" />
//             <div className="mt-6 flex gap-4 max-md:flex-col max-md:gap-1 max-md:items-start">
//                 <h2 className="text-lg  text-gray-800">Recommanded Jobs</h2>
//                 <span className="font-semibold  text-sm text-[#0154AA] border-b-2 border-blue-600 cursor-pointer">
//                     See Recommanded Jobs
//                 </span>
//             </div>
//             <div className={`mt-6 ${cardsSliderRow}`}>
//                 <Cards />
//                 <Cards />
//                 <Cards />
//                 <Cards />
//                 <Cards />
//             </div>
//             <div className={`mt-6 ${cardsSliderRow}`}>
//                 <Cards />
//                 <Cards />
//                 <Cards />
//                 <Cards />
//                 <Cards />
//             </div>

//             <hr className="mt-4" />
//             <div className="flex items-center gap-4 mt-4 max-md:flex-col max-md:items-start max-md:gap-1">
//                 <h2 className="text-lg  text-gray-800">Latest Jobs</h2>
//                 <span className="font-semibold  text-sm text-[#0154AA] border-b-2 border-blue-600 cursor-pointer">
//                     See Latest Jobs
//                 </span>
//             </div>
//             <div className={`mt-6 ${cardsSliderRow}`}>
//                 <Cards />
//                 <Cards />
//                 <Cards />
//                 <Cards />
//                 <Cards />
//             </div>
//             <div className={`mt-6 ${cardsSliderRow}`}>
//                 <Cards />
//                 <Cards />
//                 <Cards />
//                 <Cards />
//                 <Cards />
//             </div>




//         </div >
//     );
// }
import Cards from "@/Component/Card";
import { Search, ChevronDown } from "lucide-react";

const cardsSliderRow =
  "flex mr-4 justify-between max-md:gap-3 max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:pb-2";

export default function MainPage() {
  return (
    <div className="max-md:mr-0 max-md:max-w-full">
      {/* Heading */}
      <div className="w-[644px] h-[48px] max-md:h-auto max-md:w-full max-md:max-w-[644px] flex flex-col gap-[5px] mt-17 max-md:mt-8">
        <h1 className="text-3xl max-md:text-2xl font-bold text-black">
          Find your dream Job, <span className="text-[#0154AA] max-md:text-base">Albert</span>
        </h1>
        <p className="text-gray-700 max-md:text-sm">
          Explore the latest job openings and apply for the best opportunities available today!
        </p>
      </div>

      {/* Search Section */}
      <div>
        <div className="flex mr-4 items-center gap-2 p-4 mt-10 max-md:mt-6 bg-white rounded-xl max-md:flex-col max-md:items-stretch max-md:gap-3">
          <div className="flex items-center flex-1 max-md:w-full border border-transparent py-1 max-md:min-w-0">
            <input
              type="text"
              placeholder="Job Title, Company, or Keyword"
              className="w-full outline-none text-gray-500 max-md:text-sm"
            />
          </div>
          <span className="text-gray-300 max-md:hidden">|</span>
          <div className="flex items-center max-md:justify-between border border-transparent max-md:border-gray-100 max-md:rounded-lg px-2 py-3 cursor-pointer text-gray-500 max-md:text-sm">
            <span className="mr-2">Select Location</span>
            <ChevronDown size={18} className="text-gray-400 shrink-0" />
          </div>
          <span className="text-gray-300 max-md:hidden">|</span>
          <div className="flex items-center max-md:justify-between border border-transparent max-md:border-gray-100 max-md:rounded-lg px-3 py-2 cursor-pointer text-gray-500 max-md:text-sm">
            <span className="mr-2">Job Type</span>
            <ChevronDown size={18} className="text-gray-400 shrink-0" />
          </div>
          <button className="flex items-center w-[140px] max-md:w-full max-md:justify-center gap-2 bg-[#0154AA] text-white px-4 py-2 rounded-lg hover:bg-[#014a96] shrink-0 max-md:text-sm">
            <Search size={18} />
            Search
          </button>
        </div>
      </div>

      {/* Similar Buttons */}
      <div className="flex flex-wrap items-center gap-3 mt-4 max-md:text-sm">
        <span className="text-gray-700">Similar:</span>
        {["Frontend", "Backend", "Graphic Design"].map((item) => (
          <button
            key={item}
            className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 font-medium max-md:px-3 max-md:py-1 max-md:text-xs"
          >
            {item}
          </button>
        ))}
      </div>

      <hr className="mt-4" />

      {/* Featured Jobs */}
      <div className="mt-6 flex gap-4 max-md:flex-col max-md:gap-1 max-md:items-start">
        <h2 className="text-lg max-md:text-base font-normal text-gray-800">Featured Jobs</h2>
        <span className="font-semibold text-sm max-md:text-xs text-[#0154AA] border-b-2 border-blue-600 cursor-pointer">
          See Featured Jobs
        </span>
      </div>
      <div className={`mt-6 ${cardsSliderRow}`}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      {/* Recommanded Jobs */}
      <hr className="mt-4" />
      <div className="mt-6 flex gap-4 max-md:flex-col max-md:gap-1 max-md:items-start">
        <h2 className="text-lg max-md:text-base text-gray-800">Recommanded Jobs</h2>
        <span className="font-semibold text-sm max-md:text-xs text-[#0154AA] border-b-2 border-blue-600 cursor-pointer">
          See Recommanded Jobs
        </span>
      </div>
      <div className={`mt-6 ${cardsSliderRow}`}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className={`mt-6 ${cardsSliderRow}`}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      {/* Latest Jobs */}
      <hr className="mt-4" />
      <div className="flex items-center gap-4 mt-4 max-md:flex-col max-md:items-start max-md:gap-1">
        <h2 className="text-lg max-md:text-base text-gray-800">Latest Jobs</h2>
        <span className="font-semibold text-sm max-md:text-xs text-[#0154AA] border-b-2 border-blue-600 cursor-pointer">
          See Latest Jobs
        </span>
      </div>
      <div className={`mt-6 ${cardsSliderRow}`}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className={`mt-6 ${cardsSliderRow}`}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}