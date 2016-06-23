var React = require('react');
var ReactDOM = require('react-dom');

var Hi = React.createClass({
  swag: function () {
    this.setState({
      chi: this.state.chi + "o"
    });
  },

  getInitialState: function () {
    return {
      chi : ""
    }
  },

  render: function() {
    return (
      <div>
      <h1>Hi {this.props.name}{this.state.chi} </h1>
      <button type="button" onClick={this.swag}>Swagify</button>
      </div>
    )
  }
});

var Hello = React.createClass({
  render: function() {
    return (
      <Hi name="bro"/>
    )
  }
})
ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);
