import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topics: 'react'
        }
    }

    nameChnageHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    commentChnageHandler = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    topicsChangeHandler = (event) => {
        this.setState({
            topics: event.target.value
        })
    }

    submitChange = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submitChange}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.nameChnageHandler} />
                </div>
                <br /><br />
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.commentChnageHandler} />
                </div>
                <br /><br />
                <div>
                    <label>Topic</label>
                    <select value={this.state.topics} onChange={this.topicsChangeHandler}>
                        <option value="react">React</option>
                        <option value="node">Node</option>
                        <option value="php">PHP</option>
                    </select>
                </div>
                <br /><br />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
