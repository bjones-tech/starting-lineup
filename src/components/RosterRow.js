import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { minus } from 'react-icons-kit/icomoon/minus';
import { plus } from 'react-icons-kit/icomoon/plus';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToLineup, removeFromLineup } from '../redux/actions';

const Action = props => {
  const playerInLineup = props.lineup.filter(player => player.number === parseInt(props.player.number))
  let buttonColor = { background: '#dbceb0' }

  if (playerInLineup.length === 0) {
    buttonColor = props.lineup.length < 9 ? { background: '#59a63f' } : { background: '#646464' }
    return <button style={buttonColor} className='add-remove-button' onClick={() => { props.addToLineup(props.player) }}><Icon icon={plus} size={12} /></button>
  } else {
    return <button style={buttonColor} className='add-remove-button' onClick={() => { props.removeFromLineup(props.player) }}><Icon icon={minus} size={12} /></button>
  }
}

const RosterRow = props => (
  <tr class='roster-row' key={props.player.number}>
    <td style={{ textAlign: 'right' }}>{props.player.number}</td>
    <td><Link to={`/player/${props.player.number}`}>{props.player.name}</Link></td>
    <td><Action {...props} /></td>
  </tr>
)

RosterRow.propTypes = {
  player: PropTypes.object
}

const mapStateToProps = state => ({
  lineup: state.lineup,
})

const mapDispatchToProps = {
  addToLineup: addToLineup,
  removeFromLineup: removeFromLineup,
}

export default connect(mapStateToProps, mapDispatchToProps)(RosterRow)