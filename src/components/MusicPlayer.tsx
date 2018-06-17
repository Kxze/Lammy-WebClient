import * as React from "react";
import { Card, Container, Icon, Image, Progress } from 'semantic-ui-react'

export const MusicPlayer: React.SFC = ({ children }) => (
  <Card fluid={true}>
    <Image fluid={true} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Mac_DeMarco_-_Another_One_EP.jpeg/220px-Mac_DeMarco_-_Another_One_EP.jpeg" />
    <Card.Content>
      <Card.Header>I've Been Waiting</Card.Header>
      <Card.Meta>Mac Demarco - Another One</Card.Meta>
      <Progress percent={55}>2:30</Progress>
      <Container fluid={true} textAlign="center">
        <Icon name="step backward" />
        <Icon name="play" />
        <Icon name="step forward" />
      </Container>
    </Card.Content>
  </Card>
);
