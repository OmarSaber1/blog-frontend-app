import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  console.log(props);
  return (
    <div className="bg-purple-600 text-center text-white w-80 m-4 d-inline-block">
      <h1 className="bg-green-600">{props.title}</h1>
      <p>{props.body}</p>
      <hr />
    </div>
  );
};

export default Post;
