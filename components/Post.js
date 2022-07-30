import React from "react";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
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
          <PaperAirplaneIcon className="btn rotate-45 hover:rotate-90" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      <p className="p-5 trancate">
        <span className="font-bold mr-1">{username}</span> {caption}
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a Comment ..."
          className="border-none flex-1 focus:ring-0"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
};

export default Post;
