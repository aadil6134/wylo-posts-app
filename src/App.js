import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import CreatePost from "./routes/CreatePost";
import Navbar from "./components/Navbar";

const sampleArr = {
  id: 0,
  title: "First Post",
  content: "I am Aadil",
};

function App() {
  const [postsList, setPosts] = useState([sampleArr]);

  const onCreatePost = (post) => {
    setPosts([...postsList, post]);
    console.log(postsList);
  };

  const onEditPost = (newPostsList) => {
    setPosts(newPostsList);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home postsList={postsList} onEditPost={onEditPost} />}
        />
        <Route
          path="/create-post"
          element={<CreatePost onCreatePost={onCreatePost} />}
        />
      </Routes>
    </>
  );
}

export default App;
