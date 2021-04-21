import React, { useEffect, useState } from "react";
import axios from "axios";
const FullPost = (props) => {
  let [{ post }, postSetState] = useState({
    post: null,
  });

  useEffect(() => {
    console.log(props.match.params.id);
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" + props.match.params.id
      )
      .then((el) => postSetState({ post: el.data }))
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.id]);

  return (
    <>
      {post ? (
        <div className="bg-green-500 text-center">
          <h1 className="bg-purple-200"> {post.title}</h1>
          <p>{post.body}</p>
          <button className="bg-black text-white">click me</button>
        </div>
      ) : (
        <p>nothing to show</p>
      )}
    </>
  );
};

export default FullPost;
