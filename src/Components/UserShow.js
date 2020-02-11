import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

function UserShow(props) { 
  return (
    <div>
      <Box
        className="box"
        border={4}
        borderRadius={16}
        m={1}
        justifyContent="center"
        style={{ width: "50%", height: "50%" }}
      >
        <h2>Listing Posts of user : {props.users.name}</h2>
        {props.posts.map(post => {
          return (
            <li align="left" style={{ marginLeft: "180px" }} key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
        <br />  
        <Link to="/users">
          <Button className="btn" variant="contained" color="primary">
            Back
          </Button>
        </Link>
      </Box>
    </div>
  );
}

const mapStateToProp = state => {
  const id = localStorage.getItem("id");
  return {
    users: state.users.filter(user => user.id === Number(id)),
    posts: state.posts.filter(post => post.userId === Number(id))
  };
};

export default connect(mapStateToProp)(UserShow);
