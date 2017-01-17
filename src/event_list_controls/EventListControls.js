import React, { PropTypes } from 'react'
import Search from './Search'
import SortButton from './SortButton'

const EventListControls = ({updateSearch, makeUpdateSort, currentSort}) => {
  return (
    <span>
      <Search updateSearch={updateSearch}/>
      <SortButton 
        displayName='Sort by Title'
        sortName='title'
        currentSort={currentSort}
        makeUpdateSort={makeUpdateSort}/>
      <SortButton 
        displayName='Sort by Start Time'
        sortName='startTime'
        currentSort={currentSort}
        makeUpdateSort={makeUpdateSort}/>
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