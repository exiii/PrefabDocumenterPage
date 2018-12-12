import React from "react";
import { connect } from "react-redux";
import FileInfo from "./FileInfo";
import { State } from "../lib/reducer";

interface Props {
  rowList: any[];
}

const FileInfoList: React.SFC<Props> = ({ rowList }) => {
  return (
    <div>
      {rowList.map(row => (
        <FileInfo fileData={row} />
      ))}
    </div>
  );
};

export default connect((state: State) => ({
  rowList: state.rowList
}))(FileInfoList);
