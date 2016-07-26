var React = require('react');
var ReactDOM = require('react-dom');

var Bookomatic = React.createClass({
  render() {
    return (
      <p>Hello Nico</p>
    );
  }
});

setInterval(function() {
  ReactDOM.render(
    <Bookomatic/>,
    document.getElementById('container')
  );
}, 50);
