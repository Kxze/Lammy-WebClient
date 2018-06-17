import * as React from 'react';
import AudioControls from './AudioControls';
import LeftControls from './LeftControls';
import NowPlaying from './NowPlaying';

export const Footer: React.SFC = () => {
  return (
    <div className="footer">
      <NowPlaying />
      <AudioControls />
      <LeftControls />
    </div>
  )
}