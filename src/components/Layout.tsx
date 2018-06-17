import * as React from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
import "../App.css";
import { AppMenu } from "./Menu";
import { MusicPlayer } from "./MusicPlayer";

export const Layout: React.SFC = ({ children }) => (
  <Grid columns={2} style={{ paddingTop: "10px" }}>
    <Grid.Row centered={true} stretched={true}>
      <Grid.Column width={3}>
        <Container>
          <AppMenu />
        </Container>
        <Container style={{ maxHeight: "510px", width: "100%" }}>
          <MusicPlayer />
        </Container>
      </Grid.Column>
      <Grid.Column width={9} stretched={true}>
        <Segment className="App">{children}</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
