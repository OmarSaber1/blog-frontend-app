import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import axios from 'axios'
const AddPost = (props) => {
    let [{isSubmitted} , submittedSetState] = useState({
      isSubmitted:false
    });

const requestHandler = ()=>{
  console.log("entered handle reqeust")
      let req ={
        title :"omar",
        body : "asfs",
        id: 12
      }
      axios.post('https://jsonplaceholder.typicode.com/posts',req)
      .then(el => console.log(el))
      .then(el => submittedSetState({isSubmitted:true}))
      .then(el=>props.match.replace('/'))
      .catch(err=>{
        console.log(err)
      })
    }

    let redirect = null;
    if(isSubmitted){
      redirect = <Redirect to="/"/>
    }
  return (
    <>
    {redirect}
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
        <button onClick={()=>requestHandler()} className="text-center bg-indigo-600 mt-3 mb-3 ">Add</button>
      </div>
    </>
  );
};

export default AddPost;
