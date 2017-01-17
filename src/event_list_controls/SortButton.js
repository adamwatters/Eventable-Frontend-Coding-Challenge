import React, { PropTypes } from 'react'
import {Button } from 'react-bootstrap';

const SortButton = ({displayName, sortName, makeUpdateSort, currentSort}) => {
  return (
    <Button
      bsStyle="primary"
      disabled={sortName === currentSort}
      onClick={makeUpdateSort(sortName)}
      block>
      {displayName}
    </Button>
  )
}

SortButton.propTypes = {
  makeUpdateSort: PropTypes.func.isRequired,
  sortName: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  currentSort: PropTypes.string.isRequired,
}

export default SortButton;