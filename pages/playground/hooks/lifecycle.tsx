import React, { useState, useEffect } from "react";
import Button from "../../../components/Button";


// Destructing
const LifeCycleDemo = () => {

    
    const [counter, setCounter] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // DidMount & DidUpdate
        console.log("useEffect run");

        return () => {
            // componentWillUnmount <=> Component sẽ bij remove khỏi cấu trúc DOM
        }
    });

    console.log("Trước khi return <=> Render");
    return (
        <div className="container">
            <h1>Play Ground - Life Cycle - React Hooks</h1>
            <button onClick={() => {
                // setCounter(counter +1);
                setCounter((prevCounter) => {
                    return prevCounter + 1
                })
            }}>Counter Add</button>
            <p>{counter}</p>
            
            <button onClick={() => {
                setVisible(false);
            }}>Hide button</button>
            {
                visible && <Button />
            }
        </div>
    )
}

export default LifeCycleDemo;