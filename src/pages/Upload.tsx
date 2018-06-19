import * as React from "react";
import { connect } from "react-redux";
import { Container, Grid, Segment } from "semantic-ui-react";
import { MetadataField } from "../components/MetadataField";

const mapStateToProps = (state: any) => ({
  uploadType: state.upload.uploadType,
})

export const Upload = connect(mapStateToProps)(({ uploadType }) => (
  <Grid container={true}>
    <Grid.Row>
      <Container>
        <Segment>
          <MetadataField />
        </Segment>
      </Container>
    </Grid.Row>
    <Grid.Row>
      <Container>
        Hi
      </Container>
    </Grid.Row>
  </Grid>
));
