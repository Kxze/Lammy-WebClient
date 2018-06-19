import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { setUploadType } from "../actions/Upload";

const mapStateToProps = (state: any) => ({
  uploadType: state.upload.type,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  _setUploadType: (e: any, { value }: any) => {
    dispatch(setUploadType(value));
  }
})

export const SelectUpload = connect(mapStateToProps, mapDispatchToProps)(({ uploadType, _setUploadType }) => {
  const uploadOptions = [{
    value: "file",
    text: "File"
  }, {
    value: "youtube",
    text: "YouTube",
  }]
  
  return <Dropdown placeholder="Select a source" selection={true} value={uploadType} onChange={_setUploadType} options={uploadOptions} />
});
