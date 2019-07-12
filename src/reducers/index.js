import types from '../actions/types'

const defaultState = {
  value: 0
}

const incrementValue = (state = defaultState, action) => {
  return {
    ...state,
    value: state.value + 1
  }
}

const decrementValue = (state = defaultState, action) => {
  return {
    ...state,
    value: state.value - 1
  }
}

export default (state = defaultState, action) => {
  const actionHandler = {
    [types.INCREMENT]: incrementValue,
    [types.DECREMENT]: decrementValue
  }

  const reducer = actionHandler[action.type]

  return reducer ? reducer(state, action) : state
}
