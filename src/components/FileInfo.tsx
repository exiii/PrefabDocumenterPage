import React from "react";
import styled from "styled-components";
import { Row } from "../lib/types";

const Container = styled.div`
  padding: 5px 10px;
  border: 1px solid darkred;
  margin: 5px 0px;
  background-color: ivory;
`;

interface Props {
  fileData: Row;
}

interface State {
  checked: boolean;
}

export default class FileInfo extends React.Component<Props> {
  state: State = {
    checked: true
  };

  render() {
    const { checked } = this.state;
    const { fileData } = this.props;
    return (
      <Container>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => this.setState({ checked: !checked })}
        />
        <h2>{fileData.filename}</h2>
        {checked && (
          <div>
            <h3>FilePath</h3>
            <p>{fileData.filepath}</p>
            <h3>Guid</h3>
            <p>{fileData.guid}</p>
            <h3>Description</h3>
            <p>{fileData.description}</p>
          </div>
        )}
      </Container>
    );
  }
}
