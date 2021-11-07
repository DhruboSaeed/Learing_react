import React, { Component } from 'react'

export default class WelcomeClass extends Component {
    render() {
        return (
            <div>
                <h1>Hello from the Class Component, {this.props.name}!! </h1>
            </div>
        )
    }
}
