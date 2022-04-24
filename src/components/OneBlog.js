import React from "react";
import { Link } from "react-router-dom";
var truncate = require("lodash/truncate");

function OneBlog({ post }) {
  return (
    <div className="single-blog">
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
       
      </div>
    </div>
  );
}

export default OneBlog;
