import React from "react";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
const Post = ({ id, username, userImg, img, caption }) => {
  return (
    <div className="bg-white my-7 border rounded-sm shadow-sm">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full object-contain border p-1 mr-3 h-12 w-12 justify-between"
          alt="profile-pic"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default Post;
