import { Dispatch } from "react-redux";
import { setLoading } from "./Menus";

const setMenuData = (menuItem: string, data: any) => ({
  type: "SET_" + menuItem.toUpperCase(),
  data,
})

export const getLibraryData = (menuItem: string): any => async (dispatch: Dispatch<any>) => {
  dispatch(setLoading(true));
  const data = await fetch("http://localhost:4000/library/" + menuItem);
  if (data.status === 200) {
    const jsonData = await data.json();
    dispatch(setMenuData(menuItem, jsonData));
  }
  dispatch(setLoading(false));
}
