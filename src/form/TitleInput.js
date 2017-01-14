import React, { PropTypes } from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const TitleInput = ({validationState, handleChange}) => {
  return (
        <FormGroup
          validationState={validationState}
        >
          <ControlLabel>Event Title</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter text"
            onChange={handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
    )
}

TitleInput.propTypes = {
  validationState: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
}

export default TitleInput