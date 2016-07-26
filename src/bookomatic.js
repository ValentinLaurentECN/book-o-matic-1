import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Bookomatic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicantName: null,
    };
  }

  updateState(event) {
    this.setState({ applicantName: event.target.value });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={(event) => this.updateState(event)}
      />
    );
  }
}

setInterval(function() {
  ReactDOM.render(
    <Bookomatic />,
    document.getElementById('container')
  );
}, 50);
