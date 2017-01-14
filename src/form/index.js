import React, { Component } from 'react';
import TitleInput from './TitleInput'
import DateInput from './DateInput'
import moment from 'moment'

import { FormGroup, Button, HelpBlock } from 'react-bootstrap';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      startDateTime: moment(''),
      endDateTime: moment(''),
    };

    this.handleTitleChange = (e) => {
      this.setState({ title: e.target.value })
    }

    this.handleStartDateChange = (e) => {
      this.setState({ startDateTime: moment(e.target.value) })
    }

    this.handleEndDateChange = (e) => {
      this.setState({ endDateTime: moment(e.target.value) })
    }

    this.handleSubmit = (addEvent) => {
      addEvent({
        tempId: moment().format(),
        title: this.state.title,
        start_time: this.state.startDateTime.format('YYYY-MM-DDTHH:MM'),
        end_time: this.state.endDateTime.format('YYYY-MM-DDTHH:MM')
      })
    }
  }

  titleIsValid() {
    return this.state.title.length > 0
  }

  titleValidationState() {
    if (this.titleIsValid()) return 'success';
    return null
  }

  datePairIsValid() {
    return this.state.startDateTime.isBefore(this.state.endDateTime)  
  }

  datePairHasError() {
    const start = this.state.startDateTime
    const end = this.state.endDateTime
    return start.isValid() && end.isValid() && start.isAfter(end)  
  }

  dateValidationState(position) {
    const start = this.state.startDateTime
    const end = this.state.endDateTime
    if (this.datePairIsValid()) return 'success';
    if (start.isAfter(end)) return 'error';
    if (position === 'start' && start.isValid()) return 'success';
    if (position === 'end' && end.isValid()) return 'success';
    return null
  }

  formIsValid() {
    return this.titleIsValid() && this.datePairIsValid()
  }

  formValidationState() {
    if(this.formIsValid()) return 'success'
    if(this.datePairHasError()) return 'error';
  }

  render() {
    return (
      <form>
        <TitleInput 
          validationState={this.titleValidationState()} 
          handleChange={this.handleTitleChange}/>
        <DateInput 
          validationState={this.dateValidationState('start')} 
          handleChange={this.handleStartDateChange}
          label='Start'/>
        <DateInput 
          validationState={this.dateValidationState('end')} 
          handleChange={this.handleEndDateChange}
          label='End'/>
        <FormGroup
          controlId="event-start-date"
          validationState={this.formValidationState()} >
          <Button 
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              this.handleSubmit(this.props.addEvent)
            }}
            bsStyle="primary"
            disabled={!this.formIsValid()}
            >
            Add Event
          </Button>
          <HelpBlock>
            {this.datePairHasError() ? "Your event defies chronological sense. Please fix." : null}
          </HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

export default Form;