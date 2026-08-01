// import React from 'react'

// function Test(props) {
//   return (
//     <div>
//       <button onClick={props.sayi}>Click</button>
      
//     </div>
//   )
// }

// export default Test


// // props ---> share the data between parent component and child component

import React from "react";

function Test() {
  function handleClick() {
    alert("Test Button Clicked!");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Test Component</h1>

      <p>This is the Test Page.</p>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default Test;

