import React, { useState, useEffect } from "react";
import Button from "../../../components/Button";


// Destructing
const LifeCycleDemo = () => {

    
    const [counter, setCounter] = useState(0);
    const [visible, setVisible] = useState(true);
    const [user, setUser] = useEffect({});

    // useEffect(() => {
    //     // DidMount & DidUpdate
    //     console.log("useEffect run");

    //     return () => {
    //         // componentWillUnmount <=> Component sẽ bij remove khỏi cấu trúc DOM
    //     }
    // });
    useEffect(() => {
        console.log("Lang nghe su thay doi cua hai state counter va visible");
    }, [ counter, visible ])
    useEffect(() => {
        // DidMount - chạy một lần duy nhất sau khi render la dau tien
        console.log("useEffect run - empty deps");
    }, [])

    useEffect(() => {
        console.log("Lang nghe su thay doi cua counter");
    }, [counter])

    useEffect(() => {
        console.log("Lang nghe su thay doi cua visibsle");
    }, [visible])


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