import React, { PropTypes } from 'react'
import { FormGroup, Button } from 'react-bootstrap';

const Submit = ({formIsValid, validationState, handleSubmit}) => {
  return (
        <FormGroup
          controlId="event-start-date"
          validationState={validationState} >
          <Button 
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
            bsStyle="primary"
            disabled={!formIsValid}
            >
            Add Event
          </Button>
        </FormGroup>
    )
}

Submit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  validationState: PropTypes.string,
  formIsValid: PropTypes.bool
}

export default Submit