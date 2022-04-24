import React from "react";

export const OnePost = ({ post, editing, deleting }) => (
  <div className="post">
    <p>{post.caption}</p>
    <div className="overlay">
      <button onClick={() => editing(post)}>Edit</button>
      <button onClick={() => deleting(post.id)}>Delete</button>
    </div>
  </div>
);
