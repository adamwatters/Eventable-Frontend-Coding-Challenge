import React, { PropTypes } from 'react'
import Event from './Event'

const EventList = ({events}) => {
  return (
    <div>
      {events.map((event) => <Event event={event} key={event.id || event.tempId}/>)}
    </div>
  )
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default EventList;