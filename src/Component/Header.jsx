// "use client";
// import Image from "next/image";
// import { Search, Menu, X } from "lucide-react";
// import { useState } from "react";

// const navLinks = [
//     { href: "#", label: "Find Jobs", active: true },
//     { href: "#", label: "Top Companies" },
//     { href: "#", label: "Job Tracker" },
//     { href: "#", label: "My Calendar" },
//     { href: "#", label: "Documents" },
//     { href: "#", label: "Messages" },
//     { href: "#", label: "Notifications" },
// ];

// export default function Header() {
//     const [open, setOpen] = useState(false);

//     return (
//         <header className="w-full bg-white   py-4 ">
//             <div className=" hidden md:flex items-center gap-[29px] flex-1 h-[39px]">

                
//                 <div className="flex items-center  max-md:min-w-0">
//                     {/* Logo */}
//                     <Image src="/images/logo.png" alt="Logo" width={80} height={65} />

//                     {/* Links */}
//                     <div className="hidden md:flex items-center gap-[29px] w-full h-[19px]   ">
//                         {navLinks.map(({ href, label, active }) => (
//                             <a
//                                 key={label}
//                                 href={href}
//                                 className={active ? "text-[#0154AA] font-bold" : "text-gray-600 hover:text-[#0154AA] "}
//                             >
//                                 {label}
//                             </a>
//                         ))}
//                     </div>
//                 </div>

               
//                 <div className="md:hidden shrink-0">
//                     <button
//                         type="button"
//                         aria-expanded={open}
//                         aria-label={open ? "Close menu" : "Open menu"}
//                         onClick={() => setOpen(!open)}
//                         className="p-1 rounded-md hover:bg-gray-100"
//                     >
//                         {open ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
//                     </button>
//                 </div>

                
//                 <div className="hidden md:flex items-center gap-2 ml-auto mr-5">
//                     {/* Search Box */}
//                     <div className="flex items-center border rounded w-70 h-10 px-3 bg-gray-100">
//                         <Search className="w-4 h-4 text-gray-500" />
//                         <input
//                             type="text"
//                             placeholder="Search"
//                             className="outline-none px-2 text-sm w-full text-gray-500 placeholder-gray-500"
//                         />
//                     </div>

//                     {/* Resume Builder Button */}
//                     <button className="bg-[#0154AA] border border-[#0154AA] px-4 py-2 rounded-lg   hover:bg-[#014a96] text-white">
//                         Resume Builder
//                     </button>

//                     {/* Avatar */}
//                     <div className="w-10 h-10 rounded-full overflow-hidden">
//                         <Image
//                             src="/images/avater.jpg"
//                             alt="User"
//                             width={40}
//                             height={40}
//                             className="object-cover w-full h-full"
//                         />
//                     </div>
//                 </div>

//             </div>

//             {/* Mobile / tablet menu */}
//             {open && (
//                 <>
//                     <button
//                         type="button"
//                         className="fixed inset-0 z-40 bg-black/30 md:hidden"
//                         aria-label="Close menu"
//                         onClick={() => setOpen(false)}
//                     />
//                     <div className="md:hidden absolute left-0 right-0 top-full z-50 max-h-[min(70vh,520px)] overflow-y-auto border-t border-gray-100 bg-white shadow-lg">
//                         <nav className="flex flex-col px-4 py-3 gap-1">
//                             {navLinks.map(({ href, label, active }) => (
//                                 <a
//                                     key={label}
//                                     href={href}
//                                     onClick={() => setOpen(false)}
//                                     className={`py-2.5 px-2 rounded-lg text-sm ${
//                                         active ? "text-[#0154AA] font-bold bg-blue-50/50" : "text-gray-700 hover:bg-gray-50"
//                                     }`}
//                                 >
//                                     {label}
//                                 </a>
//                             ))}
//                         </nav>
//                         <div className="px-4 pb-4 pt-1 space-y-3 border-t border-gray-100">
//                             <div className="flex items-center border rounded w-full h-10 px-3 bg-gray-100">
//                                 <Search className="w-4 h-4 text-gray-500 shrink-0" />
//                                 <input
//                                     type="text"
//                                     placeholder="Search"
//                                     className="outline-none px-2 text-sm w-full text-gray-500 placeholder-gray-500"
//                                 />
//                             </div>
//                             <button
//                                 type="button"
//                                 className="w-full bg-[#0154AA] border border-[#0154AA] px-4 py-2 rounded-lg hover:bg-[#014a96] text-white text-sm"
//                             >
//                                 Resume Builder
//                             </button>
//                             <div className="flex items-center gap-3 pt-1">
//                                 <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
//                                     <Image
//                                         src="/images/avater.jpg"
//                                         alt="User"
//                                         width={40}
//                                         height={40}
//                                         className="object-cover w-full h-full"
//                                     />
//                                 </div>
//                                 <span className="text-sm text-gray-700">Account</span>
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}

//         </header>
//     );
// }
"use client";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#", label: "Find Jobs", active: true },
  { href: "#", label: "Top Companies" },
  { href: "#", label: "Job Tracker" },
  { href: "#", label: "My Calendar" },
  { href: "#", label: "Documents" },
  { href: "#", label: "Messages" },
  { href: "#", label: "Notifications" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white py-4 px-4 md:px-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image src="/images/logo.png" alt="Logo" width={80} height={65} />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-[29px]">
            {navLinks.map(({ href, label, active }) => (
              <a
                key={label}
                href={href}
                className={active ? "text-[#0154AA] font-bold" : "text-gray-600 hover:text-[#0154AA]"}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center border rounded w-70 h-10 px-3 bg-gray-100">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none px-2 text-sm w-full text-gray-500 placeholder-gray-500"
            />
          </div>
          <button className="bg-[#0154AA] border border-[#0154AA] px-4 py-2 rounded-lg hover:bg-[#014a96] text-white">
            Resume Builder
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/images/avater.jpg"
              alt="User"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Mobile Burger */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md hover:bg-gray-100"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="md:hidden absolute left-0 right-0 top-full z-50 max-h-[min(70vh,520px)] overflow-y-auto border-t border-gray-100 bg-white shadow-lg">
            <nav className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map(({ href, label, active }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`py-2.5 px-2 rounded-lg text-sm ${
                    active ? "text-[#0154AA] font-bold bg-blue-50/50" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="px-4 pb-4 pt-1 space-y-3 border-t border-gray-100">
              <div className="flex items-center border rounded w-full h-10 px-3 bg-gray-100">
                <Search className="w-4 h-4 text-gray-500 shrink-0" />
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none px-2 text-sm w-full text-gray-500 placeholder-gray-500"
                />
              </div>
              <button
                type="button"
                className="w-full bg-[#0154AA] border border-[#0154AA] px-4 py-2 rounded-lg hover:bg-[#014a96] text-white text-sm"
              >
                Resume Builder
              </button>
              <div className="flex items-center gap-3 pt-1">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/images/avater.jpg"
                    alt="User"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-sm text-gray-700">Account</span>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}