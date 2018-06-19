const initialState = {
  albums: [],
  artists: [],
  songs: [],
}

export const library = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_SONGS":
      return { ...state, songs: action.data };
    case "SET_ALBUMS":
      return { ...state, albums: action.data };
    case "SET_ARTISTS":
      return { ...state, artists: action.data };
    default:
      return state;
  }
}
