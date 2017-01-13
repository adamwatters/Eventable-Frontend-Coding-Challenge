import React, { PropTypes } from 'react'

const Event = ({title}) => {
  return <div>{title}</div>
}

Event.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Event;