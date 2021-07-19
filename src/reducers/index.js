import { combineReducers } from "redux";
import users from "./users";
import albums from "./albums";
import photos from "./photos";

export default combineReducers({
  users,
  albums,
  photos,
});
