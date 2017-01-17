import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import assert from 'assert'

const stub = () => {}
const earlierDateTime = '2000-10-10T10:10'
const laterDateTime = '2000-10-10T12:10'

describe('form component', () => {
  const div = document.createElement('div');
  const form = ReactDOM.render(<Form closeFormModal={stub} addEvent={stub}/>, div);

  it('is Invalid without title and dates', () => {
    assert(!form.formIsValid())
  });

  it('title is Invalid as an empty string when initialized', () => {
    assert(!form.titleIsValid())
  });

  it('title is valid when set to a string', () => {
    form.handleTitleChange({target:{value:'foo'}})
    assert(form.titleIsValid())
  });

  it('date pair is invalid when initialized', () => {
    assert(!form.datePairIsValid())
  });

  it('date pair is invalid when end date-time is before start date-time', () => {
    form.handleStartDateChange({target:{value:laterDateTime}})
    form.handleEndDateChange({target:{value:earlierDateTime}})
    assert(!form.datePairIsValid())
  });

  it('date pair is valid when end date-time and start date-time are the same', () => {
    form.handleStartDateChange({target:{value:earlierDateTime}})
    form.handleEndDateChange({target:{value:earlierDateTime}})
    assert(form.datePairIsValid())
  });

  it('date pair is valid when end date-time is after start date-time', () => {
    form.handleStartDateChange({target:{value:earlierDateTime}})
    form.handleEndDateChange({target:{value:laterDateTime}})
    assert(form.datePairIsValid())
  });

  it('is valid with valid title and dates', () => {
    assert(form.formIsValid())
  });

});