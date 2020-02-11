import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Button from '@material-ui/core/Button'
import Home from "./Components/Home";
import UsersList from "./Components/UsersList";
import PostsList from "./Components/PostsList";
import UserShow from "./Components/UserShow";
import Showposts from "./Components/Showposts";

function App() {
  return (
    <BrowserRouter>
      <div align="center">
        <h2>Blog Ui</h2>
        <Link to="/"><Button variant="contained" color="primary">Home</Button></Link>&ensp;
        <Link to="/users"><Button variant="contained" color="primary">Users</Button></Link>&ensp;
        <Link to="/posts"><Button variant="contained" color="primary">Posts</Button> </Link>
        <hr />
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={UsersList} />
        <Route path="/users/:name" component={UserShow} />
        <Route exact path="/posts" component={PostsList} />
        <Route path="/posts/:id" component={Showposts} />
      </div>
    </BrowserRouter>
  );
}

export default App;
