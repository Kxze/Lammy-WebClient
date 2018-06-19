import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setCurrentTime, setDuration, setIsPaused } from "../actions/Player";
import { MusicPlayer } from "./MusicPlayer";

const pad = (num: number, size = 2) => {
  const s = "000000000" + num;
  return s.substr(s.length - size);
}

const formatTime = (time: number) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - (hours * 3600)) / 60);
  const seconds = Math.floor(time - (hours * 3600) - (minutes * 60));

  return `${hours !== 0 ? hours + ":" : ""}${minutes}:${pad(seconds)}`;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  _setDuration: (duration: number) => dispatch(setDuration({
    str: formatTime(duration),
    int: duration,
  })),
  _setCurrentTime: (currentTime: number) => dispatch(setCurrentTime({
    str: formatTime(currentTime),
    int: currentTime,
  })),
  _setIsPaused: (isPaused: boolean) => dispatch(setIsPaused(isPaused)),
})

const mapStateToProps = (state: any) => ({
  nowPlaying: state.player.nowPlaying,
});

export const MusicPlayerNative = connect(mapStateToProps, mapDispatchToProps)(({ nowPlaying, _setCurrentTime, _setDuration, _setIsPaused }) => {

  let player: HTMLAudioElement;

  const setTextInputRef = (element: HTMLAudioElement) => {
    player = element;
  }

  const pausePlayback = () => {
    player.pause();
    _setIsPaused(true);
  }

  const playPlayback = () => {
    player.play();
    _setIsPaused(false);
  }

  const alternatePlayback = () => {
    player.paused === false ? pausePlayback() : playPlayback();
  }

  return (
    <div>
      <audio
        ref={setTextInputRef}
        onPlay={() => _setDuration(player.duration)}
        onTimeUpdate={() => _setCurrentTime(player.currentTime)}
        autoPlay={true}
        style={{ display: "none" }}
        controls={false}
        src={nowPlaying} />
      <MusicPlayer alternatePlayback={alternatePlayback}/>
    </div>
  )
})
