// create a EyesOnMe React component.
// render a button
 // add event handlers that listens for the focus and blur events.
 // When the focus event fires, use console.log to print out the text 'Good!'.
 // When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.

import React, { Component } from 'react'
 class EyesOnMe extends Component {
   render() {
      return (
          <button onFocus={() => console.log("Good!")}
          onBlur={() => console.log("Hey! Eyes on me!")}>Click</button>
      )
  }
}
 export default EyesOnMe;
