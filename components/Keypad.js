import React from 'react';

export default class Keypad extends React.Component {
  constructor(props) {
    super();
  }

  passwordMessage() {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={this.passwordMessage} type='password' />
    );
  }
}
