var React = require('react');
var ReactDOM = require('react-dom');

var Hi = React.createClass({
  render: function() {
    return (
      <div> Test </div>
    )
  }
});

ReactDOM.render(
  <Hi />,
  document.getElementById('app')
);
