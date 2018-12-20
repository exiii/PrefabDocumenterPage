import React from "react";
import { connect } from "react-redux";
import FileInfo from "./FileInfo";
import { State } from "../lib/reducer";
import { Row } from "../lib/types";

interface Props {
  isLoadingDB: boolean;
  rowList: Row[];
}

const FileInfoList: React.SFC<Props> = ({ isLoadingDB, rowList }) => {
  return (
    <div>
      {isLoadingDB && <p>...Loading</p>}
      {rowList.map(row => (
        <FileInfo fileData={row} key={row.guid} />
      ))}
    </div>
  );
};

export default connect((state: State) => ({
  isLoadingDB: state.isLoadingDB,
  rowList: state.rowList
}))(FileInfoList);
