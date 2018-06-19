import * as React from "react";
import { connect } from "react-redux";
import { Container, Form, Grid, Label } from "semantic-ui-react";
import { SelectUpload } from "../components/SelectUpload";

const mapStateToProps = (state: any) => ({
  uploadType: state.upload.uploadType,
})

export const Upload = connect(mapStateToProps)(({ uploadType }) => (
  <Grid container={true}>
    <Grid.Row>
      <Form>
        <Form.Field>
          <Label pointing="below">Select a source</Label>
          <SelectUpload />
        </Form.Field>
      </Form>
    </Grid.Row>
    <Grid.Row>
      <Container>
        Hi
      </Container>
    </Grid.Row>
  </Grid>
));
