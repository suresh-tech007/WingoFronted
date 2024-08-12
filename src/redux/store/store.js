import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

import {
  allUsersReducer,
  forgotPasswordreducer,
  profileReducer,
  userReducer,
  userdetailsReducer,
} from "../reducers/userReducer.js";

 

const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordreducer,
  allUsers: allUsersReducer,
  userDetails: userdetailsReducer,
});

let initailState = {
   
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initailState,
  applyMiddleware(...middleware)
);

export default store;
