import React, { Component } from 'react';
import './App.css';
import { Navbar, Grid, Row, Col, Button, Modal } from 'react-bootstrap';
// import fetchEvents from './fetchEvents'
import spoofFetchEvents from './spoofFetchEvents'
import EventList from './event_list/EventList'
import Form from './form/Form'
import Search from './search/Search'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormModal: false,
      fetching: false, 
      events:[], 
      search: '',
    }
    this.addEvent = (event) => {
      this.setState((prevState) => {
        return {events: prevState.events.concat(event)};
      });
    }
    this.updateSearch = (search) => {
      this.setState({ search: search })
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
    spoofFetchEvents().then((response) => {
      this.setState({fetching: false, events: response.results})
    })
  }

  eventsFilteredBySearch() {
    if (this.state.search === '') return this.state.events;
    return this.state.events.filter((event) => {
      return  event.title.toLowerCase().match(this.state.search.toLowerCase())
    })
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
              <Search updateSearch={this.updateSearch}/>
            </Col>
            <Col xs={12} sm={8}>
              {this.state.fetching ? 
                <div>Fetching...</div> 
              : 
                <EventList events={this.eventsFilteredBySearch()} />
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
