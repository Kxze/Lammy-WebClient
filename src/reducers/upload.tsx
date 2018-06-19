const initialState = {
  uploadType: undefined,
}

export const upload = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_UPLOAD_TYPE":
      return { ...state, uploadType: action.uploadType };
    default:
      return state;
  }
}
