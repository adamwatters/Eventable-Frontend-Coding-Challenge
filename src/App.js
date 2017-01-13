import React, { Component } from 'react';
import './App.css';
import fetchEvents from './fetchEvents'
import Event from './Event'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {fetching: false, events:[]};
  }

  componentWillMount() {
    this.setState({fetching: true})
    fetchEvents().then((response) => this.setState({fetching: false, events: response.results}));
  }

  render() {
    return (
      <div className="App">
        {this.state.fetching ? (
          <div>Fetching...</div>
        ) : (
          <div>{this.state.events.map((event) => <Event title={event.title} key={event.id}/>)}</div>
        )}
      </div>
    );
  }
}

export default App;
