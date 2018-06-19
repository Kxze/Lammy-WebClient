export const setNowPlaying = (songId: string): any => ({
  type: "SET_NOW_PLAYING",
  songId,
})

export const setSongInfo = (song: any): any => ({
  type: "SET_SONG_INFO",
  song: {
    song: song.name,
    artist: song.artists[0].name,
    album: song.albums[0].name,
    cover: song.cover,
  }
})

export const setDuration = (duration: any): any => ({
  type: "SET_DURATION",
  duration,
})

export const setCurrentTime = (currentTime: any): any => ({
  type: "SET_CURRENT_TIME",
  currentTime,
})

export const setIsPaused = (isPaused: boolean): any => ({
  type: "SET_IS_PAUSED",
  isPaused,
})
