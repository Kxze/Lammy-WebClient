import * as React from 'react';
import "./layout.css";

const AudioControls = () => {
  return (
    <div className="audioControls">
      <i className="control fas fa-step-backward" />
      <i className="playButton fas fa-play" />
      <i className="control fas fa-step-forward" />
    </div>
  );
}

export default AudioControls;