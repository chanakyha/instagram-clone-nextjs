import React from "react";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
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
      <img src={img} alt="post-image" className="object-cover w-full" />
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex space-x-4 items-center">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn hover:rotate-45" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      <p className="p-5 trancate">
        <span className="font-bold mr-1">{username}</span> {caption}
      </p>
    </div>
  );
};

export default Post;
