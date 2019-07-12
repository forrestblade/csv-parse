import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class App extends Component {
  state = {}

  render () {
    return (
      <section className='App'>
        <p>React Seed</p>
        <section className='counter'>
          <button className='decrement' onClick={() => this.props.decrement()}>-</button>
          {this.props.value}
          <button className='increment' onClick={() => this.props.increment()}>+</button>
        </section>
      </section>
    )
  }
}

App.defaultProps = {
  value: 0
}

App.propTypes = {
  value: PropTypes.number
}
