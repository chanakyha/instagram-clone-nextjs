import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  PlusCircleIcons,
  UserGroupIcon,
  HeartIcons,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between bg-white max-w-6xl">
        <div className="relative w-24 hidden lg:inline-grid cursor-pointer">
          <Image
            objectFit="contain"
            src="https://links.papareact.com/ocw"
            layout="fill"
          />
        </div>
        <div className="lg:hidden relative w-10 h-10 flex-shirnk-0 cursor-pointer">
          <Image
            objectFit="contain"
            layout="fill"
            src="https://links.papareact.com/jjm"
          />
        </div>
        <div className="relative mt-1 p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-grey-50 block w-full pl-10 sm:text-sm border-grey-300 rounded-md focus:ring-black focus:border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
