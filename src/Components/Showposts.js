import React from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Showposts(props) {
  // const handleClick = () => {
  //   localStorage.clear();
  // };
  return (
    <div align="center">
      <Box
        className="box"
        border={4}
        borderRadius={16}
        m={1}
        justifyContent="center"
        style={{ width: "90%", height: "50%" }}
      >
        {localStorage.setItem("param", props.match.params.id)}
        {props.users && <h2>UserName:&ensp;&ensp;{props.users.name}</h2>}
        <hr />
        {props.posts && (
          <div>
            <h2>
              Title:
              <br />{" "}
            </h2>
            <h3>{props.posts.title}</h3>
            <hr />
            <h2>
              Body:
              <br />{" "}
            </h2>
            <h3>{props.posts.body}</h3>
          </div>
        )}
        <hr />
        <h2>
          Comments: <br />
        </h2>
        {props.comments ? (
          props.comments.map(comment => {
            return (
              <p key={comment.id}>
                <li
                  style={{ marginLeft: "100px" }}
                  align="left"
                >
                  {comment.body}
                </li>
              </p>
            );
          })
        ) : (
          <p>loading...!!</p>
        )}

        <Link to="/posts">
          <Button
            className="btn"
            variant="contained"
            color="primary"
            //onClick={handleClick}
          >
            Back
          </Button>
        </Link>
      </Box>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const id = Number(props.match.params.id);
  return {
    users:
      state.posts === undefined ? ' '
      :state.users.find(user =>
         user.id == state.posts.find(post => post.id === id).userId
      ),
    posts: state.posts.find(post => post.id === id),
    comments: state.comments.filter(comment=>comment.postId===id)
  };
};

export default connect(mapStateToProps)(Showposts);