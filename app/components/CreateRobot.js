import React from 'react'
import axios from 'axios'

export default class CreateRobot extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async handleSubmit (event) {
        event.preventDefault()
        try {
            const res = await axios.post('/api/robots', this.state)
            this.props.addRobot(res.data)
            console.log('can I? ', res.data)
        } catch (error) {
            console.error(error)
        }

    }

    render() {
        const { name } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Robot Name:</label>
                <input onChange={this.handleChange} name="name" type="text" value={name} />

                <button type="submit">Add</button>
            </form>
        )
    }
}
