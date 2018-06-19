const initialState = {
  menu: "home",
  menuBar: "playlists",
  isLoading: false,
}

export const menus = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_MENU":
      return { ...state, menu: action.menu };
    case "SET_LIBRARY_MENU":
      return { ...state, menuBar: action.menu };
    case "SET_LOADING":
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
}
