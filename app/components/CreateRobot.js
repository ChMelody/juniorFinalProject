import React from 'react'
import { connect } from 'react-redux';
import { addRobot } from '../redux/robotsReducer'


class CreateRobot extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value,
        })
      }

    handleSubmit (event) {
        event.preventDefault()
        try {
            this.props.addNew(this.state)
            this.props.history.push('/robots')
        } catch (error) {
            console.error('Problem in handleSubmit: ', error)
        }

    }

    render() {
        console.log('this.state.robots', this.state.robots)
        console.log('props', this.props)
        return (
            <div>
                <h1>New Robot Form</h1>
                <form action="POST" onSubmit={this.handleSubmit}>
                    <label htmlFor="robot">
                        {!this.props.name && (
                            <span>Robot name: </span>
                        )}
                    </label>
                    <input type="text" name="name" onChange={this.handleChange} />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

const mapState = state => ({
    robots: state.robots
})

// make props
const mapDispatch = dispatch => {
    return {
        addNew: robot => {
            dispatch(addRobot(robot))
        }
    }
}

export default connect(mapState, mapDispatch)(CreateRobot)


/*

*/
