import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = (params) => {
  const { onCreatePost } = params;
  const navigate = useNavigate();
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onCreatePostItem = (event) => {
    event.preventDefault();
    const post = { id, title, content };
    setId(id + 1);
    onCreatePost(post);
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Create Post</h1>
      <form onSubmit={onCreatePostItem}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="btn-container">
        <button type="submit">Create Post</button>
        <button className="cancel-btn" type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
