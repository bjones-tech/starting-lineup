import React from 'react';
import PropTypes from 'prop-types'

const LineupPosition = props => {
  return <div className='lineup-position'>{props.index + 1}</div>
}

LineupPosition.propTypes = {
  index: PropTypes.number,
}

export default LineupPosition