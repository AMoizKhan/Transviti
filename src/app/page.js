
// import Header from "@/Component/Header";
// import Sidebar from "@/Component/Sidebar";
// import MainPage from "./Home/page";

// export default function Home() {
//   return (
//     <div className="bg-[#F4F4F4] w-full min-h-screen">
//       {/* Header */}
//       <div className= "overflow-visible">
//         <Header />
//       </div>

//       {/* Main Layout */}
//       <div className="flex flex-col  px-4 pb-8 md:flex-row md:gap-6 md:px-0 md:pb-0">
        
//         {/* Sidebar (NO CHANGE) */}
//         <div className="w-full mt-4 md:mt-[25px] md:ml-[50px] md:w-[346px] md:h-[461px]">
//           <Sidebar /> 
//         </div>

//         {/* Page Content */}
//         <div className="flex-1 max-md:min-w-0 ">
//           <div className="w-full">
//             <MainPage />
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="h-10 flex items-center justify-center text-xs text-gray-500">
//         © 2025 Company
//       </div>
//     </div>
//   );
// }
import Header from "@/Component/Header";
import Sidebar from "@/Component/Sidebar";
import MainPage from "./Home/page";

export default function Home() {
  return (
    <div className="bg-[#F4F4F4] w-full min-h-screen overflow-x-hidden">
      {/* Header */}
      <div className="overflow-visible">
        <Header />
      </div>

      {/* Main Layout */}
      <div className="flex flex-col px-4 pb-8 md:flex-row md:gap-6 md:px-0 md:pb-0">
        
        {/* Sidebar (NO CHANGE) */}
        <div className="w-full mt-4 md:mt-[25px] md:ml-[50px] md:w-[346px] md:h-[461px]">
          <Sidebar />
        </div>

        {/* Page Content */}
        <div className="flex-1 max-md:min-w-0">
          <div className="w-full">
            <MainPage />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="h-10 flex items-center justify-center text-xs text-gray-500">
        © 2025 Company
      </div>
    </div>
  );
}