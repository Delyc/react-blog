import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axiosBase from "../api";
import edit from "../assets/icons/edit.png"
import readmore from "../assets/icons/readmore.png"
import deletee from "../assets/icons/delete.png"
var truncate = require("lodash/truncate");



const OneBlog = ({ post }) => {
  const postRef = useRef();
  const deletePost = async() => {
    
    console.log("delete");
    const del = window.confirm("Are you sure? This will be deleted.");
    console.log(del);
    if (del) {
      // Perform query
      try {
        const res = await axiosBase.delete("/posts/" + post._id
        );
        
      } catch (error) {
        console.error(error);
      }
      if (postRef.current) {
        console.log(postRef.current);
        postRef.current.className = "d-none";
      }
    } else {
      console.log("Cancelled");
    }
  };
  return (
    <div className="single-blog" ref={postRef}>
      <p>
        {truncate(post.caption, {
          length: 200,
        })}
      </p>
      <div className="Link-buttons">
        <button className="action">
          {" "}
          <Link className="" to={`/blog/${post._id}`}> 
          <img src={readmore} alt="" />
       
          </Link>
        </button>
        <button className="action">
          {" "}
          <Link className="" to={`/edit/${post._id}`}>
          <img src={edit} alt="" />
          </Link>
        </button>
        <button onClick={(e) => deletePost()} className="action">
          {" "}
          <img src={deletee} alt="" />
        </button>
      </div>
    </div>
  );
};

export default OneBlog;
