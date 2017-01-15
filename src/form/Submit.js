import React, { PropTypes } from 'react'
import { FormGroup, Button, HelpBlock } from 'react-bootstrap';

const Submit = ({formIsValid, formHasError, validationState, handleSubmit}) => {
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
          <HelpBlock>
            {formHasError ? "Event ends before it begins." : null}
          </HelpBlock>
        </FormGroup>
    )
}

Submit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  validationState: PropTypes.string,
  formIsValid: PropTypes.bool,
  formHasError: PropTypes.bool
}

export default Submit