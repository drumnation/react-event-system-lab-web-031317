import React from 'react';

export default class EyesOnMe extends React.Component {
  constructor(props) {
    super();
  }

  goodMessage() {
    console.log('Good!')
  }

  focusMessage() {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.goodMessage} onBlur={this.focusMessage}></button>
    );
  }
}
