import React from "react";
import { useState }  from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)

    const addNumber = () => {
      return setCount(count + 1)
    }

    const subtractNumber = () => {
      return setCount(count - 1)
    }

    return(
    <>
        <h2>Counter</h2>
        <h4>{count}</h4>
        <button title="addition" onClick={addNumber} id="add">Add</button>
        <button title="subtraction" onClick={subtractNumber} id="subtract">Subtract</button>
    </>
    )
}