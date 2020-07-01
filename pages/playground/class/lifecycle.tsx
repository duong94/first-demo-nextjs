import React, { Component } from "react";

type StateType = {
    counter: number;
    visible: boolean;
}

// bable + webpack
export default class playGround extends Component<any, StateType> {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            visible: true,
        }
        console.log("constructor");
    }

    UNSAFE_componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    UNSAFE_componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    render() {
        console.log("render run");
        return (
            <div className="container">
                <h1>Play Ground - life Cycle - React Hooks</h1>
                <button onClick={() =>{
                    const counter = this.state.counter;
                    this.setState((prevState) => {
                        return {
                            counter: prevState.counter + 1
                        }
                    })
                    // partial -> Một phần của state                    
                }}>Counter Add</button>
                <p>{this.state.counter}</p>
            </div>
        )
    }
}