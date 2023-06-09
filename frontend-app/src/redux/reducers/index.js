import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import usersLogin from "./profile/usersLogin_reducers";

export default combineReducers({
  authReducer,
  usersLogin
});