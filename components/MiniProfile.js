import React from "react";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://avatars.githubusercontent.com/u/66877639?v=4"
        alt="avatar"
        className="cursor-pointer hover:scale-110 transition duration-150 ease-out rounded-full border p-[2px] w-16 h-16"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">{".___chanakyha___."}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="ml-2 text-sm font-semibold text-red-400">
        Sign Out
      </button>
    </div>
  );
};

export default MiniProfile;
