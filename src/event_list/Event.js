import React, { PropTypes } from 'react'
import moment from 'moment'
import './Event.css';

const Event = ({event}) => {
  return (
    <section className='event'>
      <h4>{event.title}</h4>
      <p>Starts: {moment(event.start_time).format('MMMM Do YYYY, h:mm a')}</p>
      <p>Ends: {moment(event.end_time).format('MMMM Do YYYY, h:mm a')}</p>
    </section>
  )
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
}

export default Event;