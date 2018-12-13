import React from "react";
import { connect } from "react-redux";
import FileInfo from "./FileInfo";
import { State } from "../lib/reducer";
import { Row } from "../lib/types";

interface Props {
  rowList: Row[];
}

const FileInfoList: React.SFC<Props> = ({ rowList }) => {
  return (
    <div>
      {rowList.map(row => (
        <FileInfo fileData={row} key={row.guid} />
      ))}
    </div>
  );
};

export default connect((state: State) => ({
  rowList: state.rowList
}))(FileInfoList);
