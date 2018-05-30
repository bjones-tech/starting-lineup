export const ADD_PLAYER = 'ADD_PLAYER'

export const addPlayer = player => ({
  type: ADD_PLAYER,
  payload: player,
})

export const ADD_TO_LINEUP = 'ADD_TO_LINEUP'

export const addToLineup = player => ({
  type: ADD_TO_LINEUP,
  payload: player,
})

export const REMOVE_FROM_LINEUP = 'REMOVE_FROM_LINEUP'

export const removeFromLineup = position => ({
  type: REMOVE_FROM_LINEUP,
  payload: position,
})

export const REORDER_POSITIONS = 'REORDER_POSITIONS'

export const reorderPositions = (startPosition, endPosition) => ({
  type: REORDER_POSITIONS,
  payload: {startPosition, endPosition},
})