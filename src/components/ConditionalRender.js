import React, { Component } from 'react'

export default class ConditionalRender extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        if (this.state.isLoggedIn) {
            return <div>Successfully</div>
        } else {
            return <div>Unseccessfully</div>
        }

        // return (
        //     <div>
        //         <div>Logged In Succesfully</div>
        //         <div>Logged In Unsuccesfully</div>
        //     </div>
        // )
    }
}
