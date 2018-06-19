import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Icon } from "semantic-ui-react";
import { setNowPlaying, setSongInfo } from "../actions/Player";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setNowPlayingSong: (song: any) => {
    dispatch(setSongInfo(song));
    dispatch(setNowPlaying(song.id));
  }
});

export const SongActionItem = connect<any, any, any>(undefined, mapDispatchToProps)(({ setNowPlayingSong, song }) => (
  <Icon className="actionButton" style={{ margin: "-37px", zIndex: "999" }} name="play" onClick={() => setNowPlayingSong(song)} />
));