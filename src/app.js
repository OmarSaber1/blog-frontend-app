import React from "react";
import Navbar from "./components/navbar/nav";
import AddPost from "./components/addPost/addpost";
import Posts from "./components/posts/posts";
import { Route, Switch } from "react-router-dom";
import FullPost from "./components/fullPost/fullpost";
const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Posts} />
      <Route exact path="/addpost" component={AddPost} />
      <Route exact path="/:id" component={FullPost} />
      </Switch>
    </div>
  );
};

export default App;
