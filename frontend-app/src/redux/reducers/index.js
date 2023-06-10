import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import usersLogin from "./profile/usersLogin_reducers";
import gameReducer from "./game/game.reducer";

export default combineReducers({
  authReducer,
  usersLogin,
  gameReducer
});