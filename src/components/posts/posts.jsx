import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../post/post";
import { Link, Route } from "react-router-dom";
import FullPost from "../fullPost/fullpost";

const Posts = (props) => {
  let [{ postsState }, postsSetState] = useState({
    postsState: [],
  });

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((posts) => {
        const postsSlice = posts.data.slice(0, 4);
        postsSetState({ postsState: postsSlice });
      })
      .then((el) => console.log(postsState))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mx-auto">
      {postsState ? (
        postsState.map((post) => (
          <Link to={"/" + post.id}
          key={post.id}
          >
            <Post
              title={post.title}
              body={post.body}
              id={post.id}
            />
          </Link>
        ))
      ) : (
        <p>Not thing to show</p>
      )}
      <Route exact path="/:id" component={FullPost} />
    </div>
  );
};

export default Posts;
