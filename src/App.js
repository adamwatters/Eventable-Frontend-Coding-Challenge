import React, { Component, PropTypes } from 'react';
import './App.css';
import { Navbar, Grid, Row, Col, Button, Modal } from 'react-bootstrap';
import moment from 'moment'
import EventList from './event_list/EventList'
import EventListControls from './event_list_controls/EventListControls'
import Form from './form/Form'

class App extends Component {
  static propTypes = {
    fetchEvents: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      showFormModal: false,
      fetching: false, 
      events:[], 
      search: '',
      sort: 'title'
    }
    this.fetchEvents = props.fetchEvents
    this.addEvent = (event) => {
      this.setState((prevState) => {
        return {events: prevState.events.concat(event)};
      });
    }
    this.updateSearch = (search) => {
      this.setState({ search: search })
    }
    this.makeUpdateSort = (sortSetting) => {
      return () => {
        this.setState({ sort: sortSetting })
      }
    }
    this.openFormModal = () => {
      this.setState({ showFormModal: true });
    }
    this.closeFormModal = () => {
      this.setState({ showFormModal: false });
    }
  }

  componentWillMount() {
    this.setState({fetching: true})
    this.fetchEvents().then((response) => {
      this.setState({fetching: false, events: response.results})
    })
  }

  eventsFilteredAndSorted() {
    return this.filterEvents(this.sortEvents(this.state.events))
  }

  filterEvents(events) {
    if (this.state.search === '') return events;
    return events.filter((event) => {
      return  event.title.toLowerCase().match(this.state.search.toLowerCase())
    })
  }

  sortEvents(events) {
    if (this.state.sort === 'title') {
      return events.sort((a, b) => {
        const titleA = a.title.toLowerCase()
        const titleB = b.title.toLowerCase()
        if(titleA < titleB) return -1;
        if(titleA > titleB) return 1;
        return 0;
      })
    };
    if (this.state.sort === 'startTime') {
      return events.sort((a, b) => {
        if(moment(a.start_time).isBefore(moment(b.start_time))) return -1;
        if(moment(a.start_time).isAfter(moment(b.start_time))) return 1;
        return 0;
      })
    }
  }

  render() {
    return (
      <span>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <span>Eventable Frontend Challenge</span>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col xs={12} sm={4}>
              <Button
                bsStyle="primary"
                bsSize="large"
                onClick={this.openFormModal}
                block>
                Add Event
              </Button>
              <br/>
              <EventListControls 
                currentSort={this.state.sort}
                makeUpdateSort={this.makeUpdateSort}
                updateSearch={this.updateSearch}/>
            </Col>
            <Col xs={12} sm={8}>
              {this.state.fetching ? 
                <div>Fetching...</div> 
              : 
                <EventList events={this.eventsFilteredAndSorted()} />
              }
            </Col>
          </Row>
        </Grid>
        <Modal show={this.state.showFormModal} onHide={this.closeFormModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form closeFormModal={this.closeFormModal} addEvent={this.addEvent}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeFormModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
    );
  }
}

export default App;
