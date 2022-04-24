import React, { useEffect, useState } from "react";

export default function CreatePost({ rerender, toEdit }) {
  const [caption, setCaption] = useState("");
  const onChangeCaption = (e) => {
    setCaption(e.target.value);
  };

  useEffect(() => {
    if (toEdit) {
      setCaption(toEdit.caption);
    }
  }, [toEdit]);

  const onSubmit = (e) => {
    setCaption("");
    e.preventDefault();
    const postData = {
      caption: caption,
      id: Math.floor(Math.random() * 100),
    };
    if (toEdit) {
      let existingsPosts = JSON.parse(localStorage.getItem("posts"));
      // find by post with id toEdit.id and edit the caption
      existingsPosts = existingsPosts.map((post) =>
        post.id === toEdit.id ? { ...post, caption } : post
      );
      localStorage.setItem("posts", JSON.stringify(existingsPosts));
      rerender();
    } else {
      let existingsPosts = JSON.parse(localStorage.getItem("posts"));
      existingsPosts
        ? existingsPosts.push(postData)
        : (existingsPosts = [postData]);
      localStorage.setItem("posts", JSON.stringify(existingsPosts));
      rerender();
      console.log(postData);
    }
  };
  return (
    <form>
      <h1>Create post</h1>
      <input
        type="text"
        name="caption"
        value={caption}
        onChange={onChangeCaption}
        placeholder="Caption"
      />
      <button onClick={(e) => onSubmit(e)}>Submit</button>
    </form>
  );
}
