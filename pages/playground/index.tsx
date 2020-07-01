import React, { Component } from "react";

type StateType = {
    counter: number;
}

// bable + webpack
export default class playGround extends Component<any, StateType> {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
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
                    this.setState({
                        counter: counter + 1
                    })
                }}>Counter Add</button>
            </div>
        )
    }
}