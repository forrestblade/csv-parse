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
        <CSVReader
          onFileLoaded={this.handleReadCSV}
          inputRef={this.fileInput}
          style={{display: 'none'}}
          onError={this.handleOnError}
          configOptions={{header: true}}
        />
        <button onClick={this.handleImportOffer}>Import</button>
      </div>
      <hr />
      <div>
        <JSONParse data={this.state.data} />
      </div>
      </React.Fragment>
    );
  }
}

