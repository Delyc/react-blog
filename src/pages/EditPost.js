import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosBase from "../api";
import Footer from "../components/footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import { useNavigate } from "react-router-dom";

function EditPost() {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
  const [caption, setCaption] = useState();
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
        setCaption(res.data.post.caption);
      } catch (error) {
        console.error(error);
      }
    };
    oneBlog();
  }, []);

  const editPost = async (data) => {
    try {
      const res = await axiosBase.put("/posts/" + id, data, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      });
      navigate("/allblogs")
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setCaption(e.target.caption.value);
    console.log(e.target.caption.value);

    const postData = {
      caption: e.target.caption.value,
    };
    await editPost(postData);
    setCaption("");
  };

  const onChangeCap = (e) => {
    setCaption(e.target.value);
  };

  return (

    <>
    <Navbar />
    <div className="edit-post">
      <h1>blog details</h1>
      {blog ? (
        <div className="edit-form">
          <form action="" onSubmit={(e) => onSubmit(e)}>
            
            <textarea onChange={onChangeCap}
              value={caption}
              name="caption"
              id=""cols="30" rows="10"></textarea>
            <button>edit</button>
          </form>
        </div>
      ) : (
        <h1>loading ......</h1>
      )}
    </div>
    <Footer />
    </>
  
  );
}

export default EditPost;
