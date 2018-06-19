import * as React from "react";
import { connect } from "react-redux";
import { Card, Grid, Image } from "semantic-ui-react";

const mapStateToProps = (state: any) => ({
  albums: state.library.albums,
});

export const AlbumTable = connect(mapStateToProps)(({ albums }) => (
  <Grid columns={4} stackable={true}>
    {albums.map((album: any) => (
      <Grid.Column>
        <Card>
          <Image src={album.cover} />
          <Card.Content>
            <Card.Header>{album.name}</Card.Header>
            <Card.Meta>{album.artist}</Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column>
    ))}
  </Grid>
));
