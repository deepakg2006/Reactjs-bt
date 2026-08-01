import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Example() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
        console.log(count);
    }

    function decrement() {
        setCount(count - 1);
        console.log(count);
    }

    function reset() {
        setCount(0);
        console.log(count);
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Count : {count}</h1>

            <button onClick={increment} style={{}}>Increase</button>

            <button onClick={decrement} style={{ margin: "20px 100px" }}>
                Decrease
            </button>

            <button onClick={reset}>
                Reset
            </button>
            <Link to="/product">product</Link>
            
        </div>
    );
}

export default Example;