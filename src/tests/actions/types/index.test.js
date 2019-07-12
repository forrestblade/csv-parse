/* eslint-env jest */
import { expect } from 'code'
import types from '../../../actions/types'

describe('Action Types', () => {
  it('should use a unique value for each action', () => {
    const sortedActionValues = Object.values(types).sort()

    sortedActionValues.reduce((previous, current) => {
      expect(current).not.equal(previous)

      return current
    })
  })
})
