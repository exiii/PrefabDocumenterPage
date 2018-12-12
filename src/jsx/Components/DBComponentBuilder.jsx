let db = new SQL.Database();

class DBComponentBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    var prefabsRowList = [];

    if (this.state.value != null) {
      let stmt = this.state.value.prepare("select * from Document;");
      stmt.getAsObject({
        $guid: 1,
        $filename: 2,
        $filepath: 3,
        $indentLevel: 4,
        $description: 5
      });

      stmt.bind({
        $guid: 1,
        $filename: 2,
        $filepath: 3,
        $indentLevel: 4,
        $description: 5
      });
      while (stmt.step()) {
        var row = stmt.getAsObject();

        prefabsRowList.push(row);
      }
    }

    return (
      <div>
        <label>
          <input type="file" id="dbFile" onChange={this.onchange.bind(this)} />
        </label>

        <div id="prefab">
          {prefabsRowList.map(data => {
            return <FileInfoComponent FileData={data} />;
          })}
        </div>
      </div>
    );
  }

  onchange(e) {
    new Promise((resolver, reject) => {
      let dbFileElm = document.getElementById("dbFile");
      let f = dbFileElm.files[0];
      let r = new FileReader();

      r.onload = function() {
        let Units = new Uint8Array(r.result);
        let db = new SQL.Database(Units);

        resolver(db);
      };

      r.readAsArrayBuffer(f);
    }).then(result => {
      this.setState({ value: result });
    });
  }
}
