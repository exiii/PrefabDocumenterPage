import React, { ChangeEvent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ActionTypes, uploadDBFile } from "../lib/actionCreators";

interface Props {
  uploadDBFile: (file: File) => { type: ActionTypes };
}

const FileUploader: React.SFC<Props> = ({ uploadDBFile }) => {
  const onChangeFileInput = function(ev: ChangeEvent<HTMLInputElement>) {
    const files = ev.target.files;
    if (files != null) {
      uploadDBFile(files[0]);
    }
  };

  return (
    <div>
      <input type="file" onChange={onChangeFileInput} />
    </div>
  );
};

export default connect(
  null,
  dispatch => ({
    ...bindActionCreators({ uploadDBFile }, dispatch)
  })
)(FileUploader);
