import React from 'react';
import { connect } from 'react-redux';
import RosterRow from './RosterRow';
import Description from './Description'

const Roster = props => {
  const groupedPlayers = props.players.reduce((obj, player) => {
    const group = player.group

    return {
      ...obj,
      [group]: [...(obj[group] || []), player],
    }
  }, {})

  const direction = props.column ? { flexDirection: 'column' } : {}

  return (
    <div>
      <h2>40-player Roster</h2>
      <div className='container' style={direction}>
        {Object.keys(groupedPlayers).map(group =>
          <div className='roster-section'>
            <h4>{group}</h4>
            <table>
              {groupedPlayers[group].map(player => <RosterRow player={player} />)}
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  players: state.players,
})

export default connect(mapStateToProps)(Roster)