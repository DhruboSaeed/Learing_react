import React, { Component } from 'react'
import ChilComponent from './ChilComponent'

export default class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Hello to Parents'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childname) {
        alert(`Hello ${this.state.parentName} from ${childname}`)
    }

    render() {
        return (
            <div>
                <ChilComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}
