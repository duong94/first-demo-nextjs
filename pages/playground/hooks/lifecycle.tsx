import React, { useState, useEffect, useMemo } from "react";
import Button from "../../../components/Button";


// Destructing chay mot lan duy nhat truoc khi render
const LifeCycleDemo = () => {
    // tuong ung voi constructor
    useMemo(() => {
        console.log("useMemo run <-> constructor");
    },[]);
    
    const [counter, setCounter] = useState(0);
    const [visible, setVisible] = useState(true);
    const [user, setUser] = useState({
        firstName: 'Jonh',
        lastname: 'Smith'
    });

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


    const fullName = useMemo(() => {
        return user.firstName + ' ' + user.lastname
    }, [user]);
    return (
        <div className="container">
            <h1>Play Ground - Life Cycle - React Hooks { fullName }</h1>
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