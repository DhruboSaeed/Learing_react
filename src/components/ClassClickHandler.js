import React, { Component } from 'react'

export default class ClassClickHandler extends Component {

    clickHandler() {
        console.log('Click from Class Component!')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click From Class</button>
            </div>
        )
    }
}
