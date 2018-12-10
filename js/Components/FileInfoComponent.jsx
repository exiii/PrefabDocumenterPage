import React from 'react';
import ReactDOM from 'react-dom';

class FileInfoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked : true
        };
    }

    render() {
        return (
            <div>
                <input type="checkbox" checked={this.state.checked} onClick={this.onClick.bind(this)} />
                <h2 id="fileName">{this.props.FileData.filename}</h2>
                {(() => {
                    if(this.state.checked) {
                        return (
                            <div>
                                <h3>FilePath</h3>
                                <p id="filePath">{this.props.FileData.filepath}</p>
                                <h3>Guid</h3>
                                <p id="guid">{this.props.FileData.guid}</p>
                                <h3>Description</h3>
                                <p id="description">{this.props.FileData.description}</p>
                            </div>
                        );
                    }
                    else {
                        return null;
                    }
                })()}
            </div>
        );
    }

    onClick(e) {
        this.setState({checked : !this.state.checked});
    }
}