import React, { PropTypes } from 'react'
import { FormGroup, HelpBlock } from 'react-bootstrap';

const Errors = ({formHasError, validationState}) => {
  return (
        <FormGroup
          validationState={validationState} >
          <HelpBlock>
            {formHasError ? "Event ends before it begins." : null}
          </HelpBlock>
        </FormGroup>
    )
}

Errors.propTypes = {
  validationState: PropTypes.string,
  formHasError: PropTypes.bool.isRequired
}

export default Errors