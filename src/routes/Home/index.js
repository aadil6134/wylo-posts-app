import React from "react";
import { useNavigate } from "react-router-dom";
import PostItem from "../../components/postItem";

const Home = (params) => {
  const { postsList, onEditPost } = params;
  const navigate = useNavigate();

  const editPost = (post) => {
    const newList = postsList.map((each) => {
      if (each.id === post.id) {
        return { ...each, ...post };
      }
      return each;
    });
    onEditPost(newList);
  };

  return (
    <div className="container">
      <ul>
        {postsList.map((each) => (
          <PostItem post={each} editPost={editPost} />
        ))}
      </ul>
      <button type="button" onClick={() => navigate("/create-post")}>
        Create New Post
      </button>
    </div>
  );
};

export default Home;
