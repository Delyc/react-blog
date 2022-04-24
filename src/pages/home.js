import axios from "axios";
import React, { useEffect, useState } from "react";
import CreatePost from "../components/createpost";
import Login from "../components/Login";
import { OnePost } from "../components/post";
import Signup from "../components/Signup";

export default function Home() {
  const [posts, setPosts] = useState(null);

  const samplePosts = [
    {
      caption: "This is a sample post",
      id: 0,
    },
    {
      caption: "This is a sample post",
      id: 1,
    },
    {
      caption: "This is a sample post",
      id: 2,
    },
    {
      caption: "This is a sample post",
      id: 3,
    },
  ];

  const getPosts = async () => {
    try {
      const res = axios.get("https://fress-media.herokuapp.com/api/posts");
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [reload, setReload] = useState(false);

  const [toEdit, setToEdit] = useState(null);
  const deleting = (id) => {
    let existingsPosts = JSON.parse(localStorage.getItem("posts"));
    existingsPosts = existingsPosts.filter((post) => post.id !== id);
    localStorage.setItem("posts", JSON.stringify(existingsPosts));
    setReload(!reload);
  };

  useEffect(() => {
    const posts = localStorage.getItem("posts");
    posts ? setPosts(JSON.parse(posts)) : setPosts(samplePosts);
    setToEdit(null);
  }, [reload]);

  return (
    <main>
      <div className="forms">
        <Signup />
        <Login />
      </div>
      <div className="posts">
        {!posts ? (
          <h1>Loading posts...</h1>
        ) : posts.length === 0 ? (
          <h1>No posts</h1>
        ) : (
          posts.map((post, index) => (
            <OnePost
              editing={(val) => setToEdit(val)}
              deleting={(val) => deleting(val)}
              post={post}
              key={index}
            />
          ))
        )}
      </div>
      <div className="create">
        <CreatePost toEdit={toEdit} rerender={() => setReload(!reload)} />
      </div>
    </main>
  );
}
