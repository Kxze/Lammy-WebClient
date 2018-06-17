const initialState = {
  albums: [],
  artists: [],
  songs: [],
}

export const library = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_SONGS":
      return { ...state, songs: action.songs };
    default:
      return state;
  }
}
