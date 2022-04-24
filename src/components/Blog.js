import React, { useState } from "react";
import axiosBase from "../api";
import Navbar from "./NavBar/Navbar";


function Blog() {
  const [caption, setCaption] = useState();
  const [err, setErr] = useState("");
    
  const createPost = async (data) => {
    
    try {
      const res = await axiosBase.post("/posts", data, {headers: { "x-auth-token": localStorage.getItem("token") },
   
      });
      console.log(res)
    } catch (error) {
      console.error(error);
      setErr(error?.response?.data?.errors || error.message);
    }
  };

 
  const onSubmit = async(e) => {
    e.preventDefault();
    setCaption(e.target.caption.value);
    console.log(e.target.caption.value)

    const postData = {
      caption: e.target.caption.value,
    };
    await createPost(postData);
    setCaption("");
 
  };

  return (
    <>
    <Navbar />

<div className="addBlog">
      <h1>blog</h1>
      <form action="" onSubmit={(e) => onSubmit(e)}>
      <p>{err}</p>
      <textarea name="caption" placeholder="Post here...." id="" cols="30" rows="10"></textarea>
        <button>add</button>
      </form>
      <div>

        
      </div>

    
    </div>
    
    </>
    
  );
}

export default Blog;
