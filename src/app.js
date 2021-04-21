import React, { useState, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/nav";
import Posts from "./components/posts/posts";
// import AddPost from "./components/addPost/addpost";

const AddPost = React.lazy(() => import("./components/addPost/addpost"));
const App = () => {
  let [{ auth }, authSetState] = useState({
    auth: true,
  });
  return (
    <div>
      <Navbar />
      <Switch>
        {/* <Route exact path="/addpost" component={AddPost} />  */}
        <Route
          exact
          path="/addpost"
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <AddPost />
            </Suspense>
          )}
        />
        <Route path="/" component={Posts} />
        {/* <Route render={() => <h1>YOU ARENT AUTHENTICATED</h1>} /> */}
        {/* <Route exact path="/:id" component={FullPost} /> */}
      </Switch>
    </div>
  );
};

export default App;
