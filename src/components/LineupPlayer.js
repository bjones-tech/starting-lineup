import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const LineupPlayer = props => {
  const player = props.lineup[props.index]

  if (!player) {
    return <div className='lineup-player-empty'>Add from Roster</div>
  }

  return (
    <div className='lineup-player' id={props.index} draggable
      onDragStart={props.dragActions.onDragStart}
      onDragOver={props.dragActions.onDragOver}
      onDragEnter={props.dragActions.onDragEnter}
      onDragLeave={props.dragActions.onDragLeave}
      onDrop={props.dragActions.onDrop}>
      {player.name}
    </div>
  )
}

LineupPlayer.propTypes = {
  index: PropTypes.number,
  dragActions: PropTypes.object,
}

const mapStateToProps = state => ({
  lineup: state.lineup,
})

export default connect(mapStateToProps)(LineupPlayer)