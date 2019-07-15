import React, { Component } from 'react'

import PropTypes from 'prop-types'
import PapaParse from 'papaparse'

export default class CSVReader extends Component {
  static propTypes = {
    onFileLoaded: PropTypes.func.isRequired,
    onError: PropTypes.func,
    inputRef: PropTypes.object,
    configOptions: PropTypes.object,
    style: PropTypes.object
  }

  handleChangeFile = (e) => {
    const {
      onFileLoaded,
      onError,
      configOptions = {}
    } = this.props

    const reader = new window.FileReader()
    const filename = e.target.files[0].name

    reader.onload = (event) => {
      PapaParse.parse(
        event.target.result,
        Object.assign(configOptions, {
          error: onError,
          complete: function(results) {
            onFileLoaded(results, filename)
          }
        })
      )
    }

    reader.readAsText(e.target.files[0])
  }

  render() {
    const {
      inputRef,
      style
    } = this.props

    return (
      <input
        className='import'
        type='file'
        accept='text/csv'
        ref={inputRef}
        onChange={e => this.handleChangeFile(e)}
        style={style}
      />
    )
  }
}
