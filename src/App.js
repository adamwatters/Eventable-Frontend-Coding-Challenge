import React, { Component } from 'react';
import './App.css';
// import fetchEvents from './fetchEvents'
import spoofFetchEvents from './spoofFetchEvents'
import Event from './Event'
import Form from './form/'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {fetching: false, events:[]};
    this.addEvent = (event) => {
      this.setState({ events: this.state.events.concat(event) })
    }
  }

  componentWillMount() {
    this.setState({fetching: true})
    spoofFetchEvents().then((response) => {
      this.setState({fetching: false, events: response.results})
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.fetching ? (
          <div>Fetching...</div>
        ) : (
          <div>{this.state.events.map((event) => <Event title={event.title} key={event.id || event.tempId}/>)}</div>
        )}
        <Form addEvent={this.addEvent}/>
      </div>
    );
  }
}

export default App;
