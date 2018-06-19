import * as React from "react";
import { connect } from "react-redux";
import { Card, Container, Icon, Image, Progress } from 'semantic-ui-react'

const mapStateToProps = (state: any) => ({
  isPaused: state.player.isPaused,
  songInfo: state.player.songInfo,
  currentTime: state.player.currentTime,
  duration: state.player.duration,
})

export const MusicPlayer = connect<any, any, any>(mapStateToProps)(({ alternatePlayback, isPaused, songInfo, currentTime, duration }) => {

  // const currentPercent = Math.floor((currentTime.int * 100) / duration.int);

  return (
    <Card fluid={true}>
      <Image fluid={true} src={songInfo.cover} />
      <Card.Content>
        <Card.Header>{songInfo.song}</Card.Header>
        <Card.Meta>{songInfo.artist} - {songInfo.album}</Card.Meta>
        <Progress active={!isPaused} color="blue" value={currentTime.int} total={duration.int} >{currentTime.str} / {duration.str}</Progress>
        <Container fluid={true} textAlign="center">
          <Icon name="step backward" />
          <Icon name={isPaused ? "play" : "pause"} onClick={alternatePlayback} style={{ cursor: "pointer" }}/>
          <Icon name="step forward" />
        </Container>
      </Card.Content>
    </Card>
  )
});
