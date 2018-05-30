import React from 'react';
import { connect } from 'react-redux'
import { Icon } from 'react-icons-kit'
import { user } from 'react-icons-kit/icomoon/user'

const Player = props => {
  const paramNumber = parseInt(props.match.params.number)
  const player = (props.players.filter(player => player.number === paramNumber))[0]

  if (player) return (
    <div style={{ margin: '50px' }}>
      
      <div><Icon icon={user} size={128}/></div>
      <div style={{ fontSize: '2.0em', fontWeight: '100', paddingBottom: '5px' }}>{player.name}</div>
      <div style={{ fontSize: '2.2em', fontWeight: '800' }}>#{player.number}</div>
    </div>
  )

  return <span>No Player Found</span>
}

const mapStateToProps = state => ({
  players: state.players,
})

export default connect(mapStateToProps)(Player)