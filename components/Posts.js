import { collection, onSnapshot } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useState(() => {
    const unsub = onSnapshot(collection(db, "post"), (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(posts);
    });

    return unsub;
  }, []);
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.profileImg}
            img={post.image}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
};

export default Posts;
