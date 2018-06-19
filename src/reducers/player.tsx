const initialState = {
  nowPlaying: undefined,
  isPaused: true,
  currentTime: {
    str: "0:00",
    int: 0,
  },
  duration: {
    str: "0:00",
    int: 0,
  },
  songInfo: {
    duration: "",
    song: "-",
    album: "-",
    artist: "-",
    cover: "http://www.scottishculture.org/index.php/themes/scottishculture/images/music_placeholder.png",
  },
}

export const player = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_NOW_PLAYING":
      return { ...state, nowPlaying: "http://localhost:4000/song/" + action.songId, isPaused: false };
    case "SET_IS_PAUSED":
      return { ...state, isPaused: action.isPaused };
    case "SET_SONG_INFO":
      return { ...state, songInfo: { ...state.songInfo, ...action.song } };
    case "SET_DURATION":
      return { ...state, duration: action.duration };
    case "SET_CURRENT_TIME":
      return { ...state, currentTime: action.currentTime };
    default:
      return state;
  }
}
