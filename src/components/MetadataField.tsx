import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Grid, Header, Input } from "semantic-ui-react";
import { setMetaData } from "../actions/Upload";

const mapStateToProps = (state: any) => ({
  metadata: state.upload.metadata,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  _setMetaData: (field: string, data: string) => dispatch(setMetaData(field, data))
})

export const MetadataField = connect(mapStateToProps, mapDispatchToProps)(({ metadata, _setMetaData }) => (
  <Grid columns={3} container={true}>
    <Grid.Row>
      <Header>Metadata</Header>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Input fluid={true} placeholder="Song" value={metadata.song} onChange={(e: any, { value }: any) => _setMetaData("song", value)} />
      </Grid.Column>
      <Grid.Column>
        <Input fluid={true} placeholder="Artist" value={metadata.artist} onChange={(e: any, { value }: any) => _setMetaData("artist", value)} />
      </Grid.Column>
      <Grid.Column>
        <Input fluid={true} placeholder="Album" value={metadata.album} onChange={(e: any, { value }: any) => _setMetaData("album", value)} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
));
