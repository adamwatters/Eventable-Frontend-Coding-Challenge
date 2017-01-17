import React, { PropTypes } from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const DateInput = ({label, validationState, handleChange, min, max}) => {
  return (
        <FormGroup
          validationState={validationState}
        >
          <ControlLabel>{label}</ControlLabel>
          <FormControl
            type="datetime-local"
            placeholder="Enter text"
            onChange={handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
    )
}

DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  validationState: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

export default DateInput