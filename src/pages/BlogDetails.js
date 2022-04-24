import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosBase from "../api";
import Navbar from "../components/NavBar/Navbar";
import BlogDetailsSkeleton from "../skeleton/BlogDetailsSkeleton";

function BlogDetails() {
  const [blog, setBlog] = useState();
   const { id } = useParams();
 

  console.log(id);
  useEffect(() => {
    const oneBlog = async () => {
      try {
        const res = await axiosBase.get("/posts/" + id, {
          headers: { "x-auth-token": localStorage.getItem("token") },
        });
        console.log(res.data);
        setBlog(res.data.post);
      } catch (error) {
        console.error(error);
      }
    };
    oneBlog();
  }, []);







  

  return (
    <>
    <Navbar />
    <div className="blog-detail">
  
      {blog ? (
        <div className="blog-one">
          <h2>{blog.caption}</h2>
         
          
        </div>
      ) : (
        <BlogDetailsSkeleton />
      )}
     
    </div>
    </>
    
  );
}

export default BlogDetails;
