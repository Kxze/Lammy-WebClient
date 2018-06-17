const initialState = {
  menu: "home",
  menuBar: "playlists",
}

export const menus = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_MENU":
      return { ...state, menu: action.menu };
    case "SET_LIBRARY_MENU":
      return { ...state, menuBar: action.menu };
    default:
      return state;
  }
}
