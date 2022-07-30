import React from "react";
import Post from "./Post";

const posts = [
  {
    id: 234,
    username: ".__chanakyha__.",
    userImg: "https://avatars.githubusercontent.com/u/66877639?v=4",
    img: "https://avatars.githubusercontent.com/u/66877639?v=4",
    caption: "Hello I am Chanakyha",
  },
  {
    id: 376,
    username: ".__chanakyha__.",
    userImg: "https://avatars.githubusercontent.com/u/66877639?v=4",
    img: "https://avatars.githubusercontent.com/u/66877639?v=4",
    caption: "Hello I am Chanakyha",
  },
  {
    id: 2344,
    username: ".__chanakyha__.",
    userImg: "https://avatars.githubusercontent.com/u/66877639?v=4",
    img: "https://avatars.githubusercontent.com/u/66877639?v=4",
    caption: "Hello I am Chanakyha",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
};

export default Posts;
