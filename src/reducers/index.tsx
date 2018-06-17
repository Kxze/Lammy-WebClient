import { combineReducers } from "redux";
import { library } from "./library";
import { menus } from "./menus";

export const rootReducer = combineReducers({
  library,
  menus,
});
