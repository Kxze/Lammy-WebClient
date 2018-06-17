import * as React from 'react';

const SongCover: React.SFC = () => (
  <img className="songCover" src={"https://d2lubch9d26anb.cloudfront.net/cdn/farfuture/c6pNpkwa_SQyu7Npj1cMpWd5UCyNn_vtGQ4Ym33JNBk/mtime:1518738980/sites/default/files/288291501599138.jpg"} />
)

const SongActions: React.SFC = () => {
  return (
    <div className="songActions">
      <i className="fas fa-ellipsis-v" />
      <i className="fas fa-thumbs-up" />
      <i className="fas fa-thumbs-down" />
    </div>
  )
}

const SongInfo = () => {
  return (
    <div className="songInfo">
      <h1>Not In Live (feat. Noonie Bao)</h1>
      <h2>Charli XCX - XCX Unreleased</h2>
    </div>
  )
}

const NowPlaying: React.SFC = () => {
  return (
    <div className="nowPlaying">
      <SongCover />
      <div className="songAux">
        <SongInfo />
        <SongActions />
      </div>
    </div>
  )
}

export default NowPlaying;
