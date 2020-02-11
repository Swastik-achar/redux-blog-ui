import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import "./UsersList.css";

function UsersList(props) {
  const handleClick = user => {
    localStorage.setItem("id", user.id);
  };

  return (
    <div style={{ marginRight:'450px' , display: 'table'}}  >
      <Box
        className="box"
        border={4}
        borderRadius={16}
        m={1} 
        justifyContent="center"
        style={{ width: '500px', height: "50%",marginLeft:'450px' }}
      >
        <h2>Listing Users -{props.users.length}</h2>
        {props.users.length > 0 ? (
          <ul>
            {props.users.map(user => {
              return (
                <li style={{marginLeft:'130px'}} align='left' key={user.id}>
                  <Link
                    onClick={() => handleClick(user)}
                    to={`/users/${
                      user.name.includes(". ")
                        ? user.name.replace(/[^A-Z0-9]+/gi, "-").toLowerCase()
                        : user.name.replace(" ", "-").toLowerCase()
                    }`}
                  >
                    {user.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Loading!!</p>
        )}
       <Link to='/'><Button className="btn" variant="contained" color="primary">Back</Button></Link> 
      </Box>
    </div>
  );
}
const mapStateToProps = (state, props) => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UsersList);
