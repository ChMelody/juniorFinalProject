import React from 'react'
import axios from 'axios'

export default class CreateRobot extends React.Component {
    constructor() {
        super()
        this.state = {
            robotName: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit (event) {
        event.preventDefault()
        const res = await axios.post('/api/robots', )
    }

    render() {
        const { robotName } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="robotName">Robot Name:</label>
                <input onChange={this.handleChange} name="robotName" type="text" value={robotName} />

                <button type="submit">Add</button>
            </form>
        )
    }
}