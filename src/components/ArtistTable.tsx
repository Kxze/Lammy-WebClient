import * as React from "react";
import { connect } from "react-redux";
import { Card, Grid, Image } from "semantic-ui-react";

const mapStateToProps = (state: any) => ({
  artists: state.library.artists,
});

export const ArtistTable = connect(mapStateToProps)(({ artists }) => (
  <Grid columns={6} stackable={true}>
    {artists.map((artist: any) => (
      <Grid.Column>
        <Card>
          <Image src={artist.cover} />
          <Card.Content>
            <Card.Header>{artist.name}</Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
    ))}
  </Grid>
));
