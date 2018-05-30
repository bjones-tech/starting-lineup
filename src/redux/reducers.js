import { combineReducers } from 'redux';
import { ADD_PLAYER, ADD_TO_LINEUP, REMOVE_FROM_LINEUP, REORDER_POSITIONS } from './actions';

const playersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [...state, action.payload]

    default:
      return state
  }
}

const lineupReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_LINEUP:
      const playerInLineup = state.filter(player => player.number === parseInt(action.payload.number))

      if (state.length < 9 && playerInLineup.length === 0) {
        return [...state, action.payload]
      }

      return state

    case REMOVE_FROM_LINEUP:
      return state.filter(player => player.number !== action.payload.number)

    case REORDER_POSITIONS:
      const [removed] = state.splice(action.payload.startPosition, 1)
      state.splice(action.payload.endPosition, 0, removed)
      return [...state]

    default:
      return state
  }
}

export default combineReducers({
  players: playersReducer,
  lineup: lineupReducer
})