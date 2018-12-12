import React from "react";

interface Props {
  fileData: {
    filename: string;
    filepath: string;
    guid: string;
    description: string;
  };
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
      <div>
        <input
          type="checkbox"
          checked={checked}
          onClick={() => this.setState({ checked: !checked })}
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
      </div>
    );
  }
}
