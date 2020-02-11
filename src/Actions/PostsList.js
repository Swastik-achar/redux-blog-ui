import axios from "axios";

export const startPostsList = () => {
  return dispatch => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        const posts = response.data;
        dispatch(setPosts(posts));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const setPosts = posts => {
  return {
    type: "SET_POSTS",
    payload: posts
  };
};

