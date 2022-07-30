import { GoogleAuthProvider, signOut, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { useAuth } from "../context/useAuth";
import toast from "react-hot-toast";

const MiniProfile = () => {
  const { user } = useAuth();
  const googleProvider = new GoogleAuthProvider();

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
      <button
        onClick={() => {
          if (user) {
            signOut(auth)
              .then(() => {
                toast.success("Logged out successfully");
              })
              .catch(() => {
                toast.error("Error logging out");
              });
          } else {
            signInWithPopup(auth, googleProvider)
              .then(() => {
                toast.success("Logged in Successfully");
              })
              .catch(console.warn);
          }
        }}
        className={`ml-2 text-sm font-semibold ${
          user ? "text-red-400" : "text-blue-400"
        }`}
      >
        {user ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
};

export default MiniProfile;
