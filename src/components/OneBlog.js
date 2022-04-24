import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axiosBase from "../api";
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
        <button className="more">
          {" "}
          <Link className="Link" to={`/blog/${post._id}`}>
            More
          </Link>
        </button>
        <button className="edit">
          {" "}
          <Link className="Link2" to={`/edit/${post._id}`}>
            Edit
          </Link>
        </button>
        <button onClick={(e) => deletePost()} className="delete">
          {" "}
          Delete
        </button>
      </div>
    </div>
  );
};

export default OneBlog;
