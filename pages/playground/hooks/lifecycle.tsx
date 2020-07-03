import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Button from "../../../components/Button";
import useConstructor from "../../../custom-hooks/useConstructor";

// Destructing 
// chay 1 lan duy nhat truoc khi render
// Cach 1: Tao bien toan cuc isRun -> check dieu kien

// Tao custom Hook -> useContructor
// -> Nhan vao mot function callback
// -> function nay chi duoc goi 1 lan duy nhat
// useConstructor(() => { // hahjjd})
let isRun = false;

const LifeCycleDemo = () => {
    // tuong ung voi constructor
    useConstructor(() => {
        console.log("constructor cach 4");
    })

    useMemo(() => {
        console.log("constructor cach 3");
    },[]);

    const isRunHook = useRef(false);
    const inputFileEl = useRef(null);    
    const [counter, setCounter] = useState(0);
    const [visible, setVisible] = useState(true);
    const [user, setUser] = useState({
        firstName: 'Jonh',
        lastname: 'Smith'
    });

    if(isRunHook.current === false) {
        console.log("constructor cach 2");

        isRunHook.current = true;
    }

    if(isRun === false) {
        // xu li constructor
        console.log("Contructor cach 1");
        isRun = true;
    }

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

    // khong duoc lam dung
    const fullName = useMemo(() => {
        return user.firstName + ' ' + user.lastname
    }, [user]);

    const handleIncreateCounter =  useCallback(() =>{
        setCounter(counter +1);
    }, [counter])
    return (
        <div className="container">
            <h1>Play Ground - Life Cycle - React Hooks { fullName }</h1>
            <button 
                onClick={handleIncreateCounter} >Counter Add</button>
            <p>{counter}</p>
            
            <button onClick={() => {
                setVisible(false);
            }}>Hide button</button>
            {
                visible && <Button />
            }
            <hr />

            <input style={{
                opacity:0,
                visibility: 'hidden',
                position: "fixed",
                left: '-1000px'
            }}ref={inputFileEl} type="file" />

            <button 
                onClick={() => {
                    console.log(inputFileEl.current);
                    //inputFileEl.current.click();
                    const input = document.querySelector('input[type="file"') as HTMLInputElement;
                    input.click();
                }}
                className="upload">Upload Image</button>
        </div>
    )
}

export default LifeCycleDemo;