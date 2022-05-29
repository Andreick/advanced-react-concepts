import React, { Component } from 'react';

export default class Counter extends Component {
  state = { count: 0 };

  increase = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.increase}>Click Me</button>
      </div>
    );
  }
}
