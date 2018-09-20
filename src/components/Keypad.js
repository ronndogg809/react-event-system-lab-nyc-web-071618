// Code Keypad Component Here
// render an input with the right type.
// add an event handler that listens for the keyUp event.
// print out the text 'Entering password...'.
import React, { Component } from 'react'
 class Keypad extends Component {
   handlePasswordInput = () => {
    console.log("Entering password...")
  }
   render() {
      return (
        <div>
          <input type="password" onKeyUp={this.handlePasswordInput}/>
        </div>
      )
  }
}
 export default Keypad;
