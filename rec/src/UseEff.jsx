// Syntax

// import { useEffect } from "react";  
// useEffect(()=>{

// }) // on every render effect called

// useEffect(()=>{

// },[]) // use effect calls only on component starting(refresh)   ([]----> empty dependency arr)


// useEffect(()=>{

// },[count]) // useEffect calls only when component starts or starts var change


// -----------------------------------------------------------------------------------------------------------

import React from 'react'
import { useEffect,useState } from 'react'

function UseEff() {
const [count , setcount]=useState(0);
const [name, setname] = useState("hi")
   useEffect(()=>{
  console.log("useeff");
   },[count])

    console.log("outside ");
  return (
    <div>
        <button onClick={()=>{setcount(count+1)}}>click</button>
         <button onClick={()=>{setname(count+1)}}>click</button>
    </div>
  )
}

export default UseEff

