/* eslint-env jest */
import { expect } from 'code'
import * as creators from '../../actions/creators'
import reducer from '../../reducers/'

describe('Given a reducer', () => {
  const defaultState = {
    value: 0
  }

  it('should return the defaultState when no match', () => {
    expect(reducer(defaultState, { type: 'NO_MATCH' })).to.equal(defaultState)
  })

  it('should increment the value when given "INCREMENT"', () => {
    const expectedState = {
      value: 1
    }
    expect(reducer(defaultState, creators.increment())).to.equal(
      expectedState
    )
  })

  it('should decrement the value when given "DECREMENT"', () => {
    const expectedState = {
      value: -1
    }
    expect(reducer(defaultState, creators.decrement())).to.equal(
      expectedState
    )
  })
})
