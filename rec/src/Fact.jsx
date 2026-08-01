// import React from 'react'

// function Fact() {

//     async function fetchdata(){

//         const [Fact,setfact]=useState([])
//         const data = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
//         const response = await data.json();

//         console.log(response);
//     }
//     fetchdata();
//   return (
//     <div>Fact</div>
//   )
// }

// export default Fact

// import React, { useEffect, useState } from "react";

// function Fact() {

//   const [fact, setFact] = useState(0);

//   async function fetchData() {
//     const data = await fetch(
//       "https://uselessfacts.jsph.pl/api/v2/facts/random"
//     );

//     const response = await data.json();

//     setFact(response.text);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "30px" }}>
//       <h2>Random Fact</h2>
//       <p>{fact}</p>

//       <button onClick={fetchData}>
//         New Fact
//       </button>
//     </div>
//   );
// }

// export default Fact;

import React from "react";
import { useState, useEffect } from "react";

function Fact() {
    const [fact, setFact] = useState();
async function fetchData() {
        const data= await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
        const response= await data.json();
        console.log(response);
        setFact(response.text);
    }
useEffect(()=>{
    fetchData()

},[])


  return (
    <div>
      <h1>{fact}</h1>
      

       <button onClick={fetchData}>
        New Fact
      </button>
    </div>
  );
}
export default Fact;