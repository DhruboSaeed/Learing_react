import React, { Component } from 'react'

export default class PassingState extends Component {

    constructor() {
        super()
        this.state = {
            message: "Passing state!"
        }
    }

    changeNumber() {
        this.setState({
            message: "Updating the passing state!!"
        })
    }

    // reverseState() {
    //     this.setState({
    //         message: this.message
    //     })
    // }

    render() {
        return (
            <div>
                <h1>Hello from the State {this.state.message}</h1>
                <button onClick={() => this.changeNumber()}>Update State</button>
                <br />
                <br />
                {/* <button onClick={() => this.reverseState()}>Reverse State</button> */}
            </div>
        )
    }
}
