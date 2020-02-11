import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postsReducer from '../Reducer/postsReducer'
import usersReducer from '../Reducer/usersReducer'
import commentsReducer from '../Reducer/commentsReducer'

const configureStore = () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer,
      users: usersReducer,
      comments: commentsReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;
