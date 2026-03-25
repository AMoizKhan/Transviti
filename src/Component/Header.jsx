
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
    <header className="w-full bg-white py-4 relative z-50">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center gap-[29px] flex-1 h-[39px] px-5">
        <div className="flex items-center">
          {/* Logo */}
          <Image src="/images/logo.png" alt="Logo" width={80} height={65} />

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-[29px] w-full h-[19px] ml-5">
            {navLinks.map(({ href, label, active }) => (
              <a
                key={label}
                href={href}
                className={
                  active
                    ? "text-[#0154AA] font-bold"
                    : "text-gray-600 hover:text-[#0154AA]"
                }
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2 ml-auto">
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
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between px-4 z-50 relative">
        <Image src="/images/logo.png" alt="Logo" width={80} height={65} />

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="p-2 rounded-md hover:bg-gray-100 z-50 relative"
        >
          {open ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen md:hidden bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-100">
          <Image src="/images/logo.png" alt="Logo" width={80} height={65} />
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="flex flex-col px-4 py-6 gap-2 overflow-y-auto h-[calc(100%-80px)]">
          {navLinks.map(({ href, label, active }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className={`py-2.5 px-2 rounded-lg text-sm ${
                active
                  ? "text-[#0154AA] font-bold bg-blue-50/50"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {label}
            </a>
          ))}

          {/* Search Box */}
          <div className="flex items-center border rounded w-full h-10 px-3 bg-gray-100 mt-4">
            <Search className="w-4 h-4 text-gray-500 shrink-0" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none px-2 text-sm w-full text-gray-500 placeholder-gray-500"
            />
          </div>

          {/* Resume Builder */}
          <button className="w-full bg-[#0154AA] border border-[#0154AA] px-4 py-2 rounded-lg hover:bg-[#014a96] text-white text-sm mt-3">
            Resume Builder
          </button>

          {/* Avatar */}
          <div className="flex items-center gap-3 pt-4">
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
        </nav>
      </div>
    </header>
  );
}