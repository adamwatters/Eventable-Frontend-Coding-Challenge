import React, { PropTypes } from 'react'
import {Button } from 'react-bootstrap';

const SortButton = ({sortName, updateSort}) => {
  return (
    <Button
      bsStyle="primary"
      onClick={updateSort}
      block>
      {sortName}
    </Button>
  )
}

SortButton.propTypes = {
  updateSort: PropTypes.func.isRequired,
  sortName: PropTypes.string.isRequired,
}

export default SortButton;