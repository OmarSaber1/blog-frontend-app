import React from "react";

const AddPost = () => {
  return (
    <>
      <h1 className="text-center bg-purple-500 ">Add Post</h1>
      <div className="grid place-content-center  text-center bg-green-500 ">
        <div className="grid rounded mt-4 ">
          <label className="bg-pink-900" htmlFor="title">title</label>
          <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent " />
        </div>
        <div className="grid">
          <label htmlFor="body">body</label>
          <input className="border border-transparent  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent " />
        </div>
        <div className="grid">
          <label htmlFor="comment">comment</label>
          <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent " />
        </div>
        <button className="text-center bg-indigo-600 mt-3 mb-3 ">Add</button>
      </div>
    </>
  );
};

export default AddPost;
