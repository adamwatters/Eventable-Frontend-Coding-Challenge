import React, { PropTypes } from 'react'
import { FormGroup, FormControl } from 'react-bootstrap';

const Search = ({updateSearch}) => {
  return (
    <form >
      <FormGroup>
        <FormControl
          type="text"
          placeholder="Search"
          onChange={(e) => {
            updateSearch(e.target.value)
          }}/>
      </FormGroup>
    </form>
  )
}

Search.propTypes = {
  updateSearch: PropTypes.func.isRequired,
}

export default Search;