const initialState = {
  uploadType: undefined,
  metadata: {
    song: "",
    artist: "",
    album: "",
  }
}

export const upload = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_UPLOAD_TYPE":
      return { ...state, uploadType: action.uploadType };
    case "SET_SONG_NAME":
      return { ...state, metadata: { ...state.metadata, song: action.data } };
    case "SET_ARTIST_NAME":
      return { ...state, metadata: { ...state.metadata, artist: action.data } };
    case "SET_ALBUM_NAME":
      return { ...state, metadata: { ...state.metadata, album: action.data } };
    default:
      return state;
  }
}
