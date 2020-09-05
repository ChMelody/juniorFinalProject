import React from 'react'
import { connect } from 'react-redux';
import { addRobot, fetchRobots } from '../redux/robotsReducer'


class CreateRobot extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        this.setState({
            name: event.target.value
        })
    }

    async handleSubmit (event) {
        event.preventDefault()
        try {
            await this.props.addRobot(this.state)
            this.setState({ name: '' })
        } catch (error) {
            console.error('Problem in handleSubmit: ', error)
        }

    }

    render() {
        console.log('this.state', this.state)
        // console.log('addrobot', this.props.robots)
        return (
            <div>
                <h1>POST Form</h1>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="name" placeholder="Robot Name" onChange={this.handleChange} />
                </div>
                <br />
                <button type="button">Add</button>
                </form>
            </div>
        )
    }
}

// const mapState = state => ({
//     robots: state.robots
// })

// make props
const mapDispatch = dispatch => {
    return {
        addRobot: robot => {
            dispatch(addRobot(robot))
          },
          fetchRobots: () => {
              dispatch(fetchRobots())
          }
    }
}

export default connect(null, mapDispatch)(CreateRobot)


/*

*/
