import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

import {
  allUsersReducer,
  forgotPasswordreducer,
  profileReducer,
  userReducer,
  userdetailsReducer,
} from "../reducers/userReducer.js";
import { adminReducer, paymentReducer, referUserreducer } from "../reducers/PaymentReducer.js";
import { GameReducer } from "../reducers/GameReducer.js";

 

const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordreducer,
  allUsers: allUsersReducer,
  userDetails: userdetailsReducer,
  payment:paymentReducer,
  batle:GameReducer,
  referUser :referUserreducer,
  Admins :adminReducer
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
