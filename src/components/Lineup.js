import React from 'react';
import { connect } from 'react-redux';
import { reorderPositions } from '../redux/actions';

class Lineup extends React.Component {
  state = {
    startPosition: null,
    currentPosition: null,
    lineupSheet: Array.from({ length: 9 })
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

  render() {
    return (
      <div>
        <h2>Lineup</h2>
        {this.state.lineupSheet.map((slot, index) => (
          <div className='row-container'>
            <div className='lineup-position'>{index + 1}</div>

            {this.props.lineup[index] ? (
              <div className='lineup-player' id={index} draggable
                onDragStart={this.onDragStart}
                onDragOver={this.onDragOver}
                onDragEnter={this.onDragEnter}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}>
                {this.props.lineup[index].name}
              </div>):(
                <div className='lineup-player-empty'>Add from Roster</div>
              )}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lineup: state.lineup,
})

const mapDispatchToProps = {
  reorderPositions: reorderPositions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Lineup)