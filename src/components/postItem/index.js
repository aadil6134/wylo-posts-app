import React, { useState } from "react";

const PostItem = (params) => {
  const { post, editPost } = params;
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const onEdit = () => {
    editPost({ ...post, title, content });
    setIsEdit(!isEdit);
  };

  const editField = () => (
    <div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
      <textarea
        type="text"
        value={content}
        placeholder="Enter content"
        onChange={(event) => setContent(event.target.value)}
      />
      </div>
    </div>
  );

  const editedField = () => (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );

  return (
    <li key={post.id}>
      {isEdit ? editField() : editedField()}
      <button type="button" onClick={onEdit}>
        {isEdit ? "OK" : "Edit"}
      </button>
    </li>
  );
};

export default PostItem;
