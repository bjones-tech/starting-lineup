import React from 'react';
import { connect } from 'react-redux';
import { reorderPositions } from '../redux/actions';

import LineupPosition from './LineupPosition'
import LineupPlayer from './LineupPlayer'
import Description from './Description'

class Lineup extends React.Component {
  state = {
    lineupSheet: Array.from({ length: 9 }),
    startPosition: null,
    currentPosition: null,
  }

  onDragOver = event => {
    event.preventDefault()
  }

  onDragStart = event => {
    this.setState({
      startPosition: event.target.id,
      currentPosition: event.target.id,
    })
  }

  onDragEnter = event => {
    event.preventDefault()

    this.setState({
      currentPosition: event.target.id,
    })

    this.props.reorderPositions(this.state.startPosition, event.target.id)

    event.target.className = 'lineup-player-selected'
  }

  onDragLeave = event => {
    event.preventDefault()

    this.props.reorderPositions(this.state.currentPosition, this.state.startPosition)

    event.target.className = 'lineup-player'
  }

  onDrop = event => {
    event.preventDefault()

    this.props.reorderPositions(this.state.currentPosition, event.target.id)

    event.target.className = 'lineup-player'
  }

  dragActions = {
    onDragStart: this.onDragStart,
    onDragEnter: this.onDragEnter,
    onDragLeave: this.onDragLeave,
    onDragOver: this.onDragOver,
    onDrop: this.onDrop,
  }

  render() {
    return (
      <div>
        <h2>Lineup</h2>
        <Description>Drag and Drop players to change their lineup position</Description>
        {this.state.lineupSheet.map((slot, index) => (
          <div className='row-container'>
            <LineupPosition index={index} />
            <LineupPlayer index={index} dragActions={this.dragActions} />
          </div>
        ))}
      </div>
    )
  }
}

const mapDispatchToProps = {
  reorderPositions: reorderPositions,
}

export default connect(null, mapDispatchToProps)(Lineup)