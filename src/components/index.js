import React, { Component } from 'react'
import { CSVReader, JSONParse } from '../utils';

export class App extends Component {

  constructor(props){
    super(props)
    this.fileInput = React.createRef();
    this.state = {
      data: ''
    }
  }
  
  handleReadCSV = (data, fileName) => {
    data = JSON.stringify(data)
    this.setState({data})
  }

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  }

  handleImportOffer = () => {
    this.fileInput.current.click();
  }

  render() {
    return (
      <React.Fragment>
      <div>
        <h2>CSV to JSON</h2>
        <CSVReader
          onFileLoaded={this.handleReadCSV}
          inputRef={this.fileInput}
          style={{display: 'none'}}
          onError={this.handleOnError}
          configOptions={{header: true}}
        />
        <button className='import' onClick={this.handleImportOffer}>Import</button>
        <br />
        <textarea value={this.state.data} rows='20' cols='90' readOnly />
      </div>
      <hr />
      <div>
        <h2>JSON to CSV</h2>
        <JSONParse />
      </div>
      </React.Fragment>
    );
  }
}

