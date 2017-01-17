import React, { PropTypes } from 'react'
import Search from './Search'
import SortButton from './SortButton'

const EventListControls = ({updateSearch, makeUpdateSort, currentSort}) => {
  return (
    <span>
      <Search updateSearch={updateSearch}/>
      <SortButton sortName='Sort by Title' updateSort={makeUpdateSort('title')}/>
      <SortButton sortName='Sort by Start Time' updateSort={makeUpdateSort('startTime')}/>
      <br/>
    </span>
  )
}

EventListControls.propTypes = {
  updateSearch: PropTypes.func.isRequired,
  makeUpdateSort: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired,
}

export default EventListControls;