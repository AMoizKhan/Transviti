import { ChevronDown } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="mt-8"> 
            <aside className="flex flex-col gap-[10px] overflow-hidden  rounded-2xl">
                {/* Main Profile Grid */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Cover Image */}
                    <div className="relative">
                        <img
                            src="/images/cover.jpg"
                            alt="Cover"
                            className="w-full h-28 object-cover"
                        />
                        <div className="absolute left-1/2 -bottom-12 transform -translate-x-1/2">
                            <div className="w-24 h-24 rounded-full shadow-lg flex items-center justify-center bg-white">
                                <img
                                    src="/images/profile.png"
                                    alt="JD"
                                    className="w-24 h-24 object-cover rounded-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="pt-16 pb-6 text-center px-4 md:px-6">
                        <h2 className="text-xl font-bold text-gray-900">Albert Flores</h2>
                        <p className="text-[15px] ml-4 mr-4 mt-2 text-gray-900 truncate md:whitespace-normal">
                            Senior Product Designer | UI / UX Designer | Graphic Designer | Web...
                        </p>
                        <p className="text-gray-500">Clinton, MaryLand</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm  text-gray-900">Profile Visitors</span>
                        <span className="text-sm text-[#0154AA] ">140</span>
                    </div>
                    <hr className="border-gray-200" />

                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-900">Resume Viewers</span>
                        <span className="text-sm text-[#0154AA] ">20</span>
                    </div>
                    <hr className="border-gray-200" />

                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-900">My Jobs</span>
                        <span className="text-sm text-[#0154AA] ">88</span>
                    </div>
                </div>

                {/* Calendar */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6">
                    <div className="flex items-center justify-between cursor-pointer">
                        <span className="font-medium text-gray-900 font-semibold">My Calendar</span>
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="mt-3 text-sm text-gray-600 ">Upcoming events</div>
                </div>
            </aside>
        </div>
    );
}
