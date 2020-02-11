import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";

function PostsList(props) {
  return (
    <div>
       <Box
        className="box"
        border={4}
        borderRadius={16}
        m={1}
        style={{ width: "50%", height: "50%" }}
      >
      <h2>Listing Posts-{props.posts.length}</h2>
      {props.posts.length !== 0 ? (
        <ul>
          {props.posts.map(post => {
            return (
              <li style={{marginLeft:'120px',}}align="left" key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Loading...!!</p>
      )}
      </Box>
    </div>
  );
}

const mapStateProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateProps)(PostsList);
