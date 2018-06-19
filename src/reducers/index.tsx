import { combineReducers } from "redux";
import { library } from "./library";
import { menus } from "./menus";
import { player } from "./player";
import { upload } from "./upload";

export const rootReducer = combineReducers({
  library,
  menus,
  player,
  upload
});
