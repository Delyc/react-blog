import React, { useState, useEffect } from "react";
import axiosBase from "../api";
import Footer from "../components/footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import OneBlog from "../components/OneBlog";
import BlogDetailsSkeleton from "../skeleton/BlogDetailsSkeleton";


function GetBlogs() {
  const [posts, setPosts] = useState();
  

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axiosBase.get("/posts", {
          headers: { "x-auth-token": localStorage.getItem("token") },
        });
        setPosts(res.data.post);
        console.log(res.data.post);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);

  return (
    <>
    <Navbar />
    <div className="blogs">
    <h1>all posts</h1>
    <div className="blog-allblogs">
      {posts ? (
        
          <div className="blogs-map">
            {posts.map((post, index) => {
              return <OneBlog key={index} post={post}></OneBlog>;
            })}
          </div>
      
      ) : (
        < BlogDetailsSkeleton/>
      )}
    </div>
  </div>
  <Footer />
  </>
    
  );
}

export default GetBlogs;
