import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../post/post";
import {Route} from'react-router-dom'

const Posts = () => {
  let [{ postsState }, postsSetState] = useState({
    postsState: [],
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((posts) => {
        const postsSlice = posts.data.slice(0, 10);
        postsSetState({ postsState: postsSlice });
        console.log(postsState, typeof postsState);
      })
      .then((el) => console.log(postsState))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
        <Route  path="/posts" render={()=> <h2>Hello /posts</h2>}/>
        <Route exact path="/" render={()=> <h1>Hello route</h1>}/>
      {postsState ? (
        postsState.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))
      ) : (
        <p>Not thing to show</p>
      )}
      {console.log(postsState)}
    </div>
  );
};

export default Posts;
