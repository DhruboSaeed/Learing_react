import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }


    UpdateNumber() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => console.log("Callback ", this.state.count))
        // console.log(this.state.count)

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    UpdateNumberFive() {
        this.UpdateNumber()
        this.UpdateNumber()
        this.UpdateNumber()
        this.UpdateNumber()
        this.UpdateNumber()
    }

    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.UpdateNumber()} >Increment</button>
                <br /> <br />
                <button onClick={() => this.UpdateNumberFive()} >IncrementFive</button>
            </div>
        )
    }
}
