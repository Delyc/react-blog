import React, { useState, useEffect } from "react";
import axiosBase from "../api";
import Footer from "../components/footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import OneBlog from "../components/OneBlog";
import BlogDetailsSkeleton from "../skeleton/BlogDetailsSkeleton";
import { Link } from "react-router-dom";


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
    <h1 className="blogs_h1">Blogs</h1>
    <div className=" hrtwo">
      <div className="hrs">
      <hr className="hr-second"/>
        <hr className="hr-first"/>
      </div>
       
        <button className="add-button"> <Link className="add-btn" to="/blog">Add post</Link> </button>
        </div>
       


    <div className="blogs">
  
   
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
