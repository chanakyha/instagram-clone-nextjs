import React, { useState, useEffect } from "react";
import {
  HeartIcon as HeartIconFilled,
  BookmarkIcon as BookmarkIconFilled,
} from "@heroicons/react/solid";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { useAuth } from "../context/useAuth";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

const Post = ({ id, username, userImg, img, caption }) => {
  const [iconState, setIconState] = useState({
    liked: false,
    bookmark: false,
  });
  const [comment, setComment] = useState("");
  const [totalComments, setTotalComments] = useState();
  const { user } = useAuth();

  useEffect(() => {
    const unsub = onSnapshot(
      query(
        collection(db, "post", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        console.log(totalComments);
        setTotalComments(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );

    return unsub;
  }, []);

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "post", id, "comments"), {
      comment: commentToSend,
      userName: user.displayName,
      userImage: user.photoURL,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="bg-white my-7 border rounded-sm shadow-sm">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          loading="lazy"
          className="rounded-full object-contain border p-1 mr-3 h-12 w-12 justify-between"
          alt="profile-pic"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>
      <img src={img} alt="post-image" className="object-cover w-full" />
      {user ? (
        <div className="flex items-center justify-between px-4 pt-4">
          <div className="flex space-x-4 items-center">
            {iconState.liked ? (
              <HeartIconFilled
                onClick={() =>
                  setIconState({ ...!iconState, liked: !iconState.liked })
                }
                className="btn text-red-600"
              />
            ) : (
              <HeartIcon
                onClick={() =>
                  setIconState({ ...!iconState, liked: !iconState.liked })
                }
                className="btn"
              />
            )}

            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn rotate-45 hover:rotate-90" />
          </div>
          {iconState.bookmark ? (
            <BookmarkIconFilled
              onClick={() =>
                setIconState({ ...iconState, bookmark: !iconState.bookmark })
              }
              className="btn text-blue-500"
            />
          ) : (
            <BookmarkIcon
              onClick={() =>
                setIconState({ ...iconState, bookmark: !iconState.bookmark })
              }
              className="btn"
            />
          )}
        </div>
      ) : null}
      <p className="p-5 trancate">
        <span className="font-bold mr-1">{username}</span> {caption}
      </p>
      {totalComments?.length > 0 ? (
        <div>
          {totalComments.map((commentData) => {
            <div
              key={commentData.id}
              className="flex items-center space-x-2 mb-3"
            >
              <img
                className="h-7 rounded-full"
                src={commentData.userImage}
                alt="profile-pic"
              />
              <p>Hello</p>
              <p>{commentData.comment}</p>
            </div>;
          })}
        </div>
      ) : null}
      {user ? (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            placeholder="Add a Comment ..."
            className="border-none flex-1 focus:ring-0"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            disabled={!comment.trim()}
            onClick={sendComment}
            type="submit"
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default Post;
