import React from 'react'
import { connect } from 'react-redux';
import { addRobot, fetchRobots } from '../redux/robotsReducer'


class CreateRobot extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        // this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handleChange (event) {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    handleSubmit (event) {
        event.preventDefault()
        try {
            this.props.addRobot(this.state.name)
            this.setState({ name: '' })
        } catch (error) {
            console.error('Problem in handleSubmit: ', error)
        }

    }

    render() {
        console.log('CreateRobot page is rendering')
        // console.log('addrobot', this.props.robots)
        return (
            <div className='add-robot'>
                <input
                    type="text"
                    // value={this.state.name}
                    onChange={event => this.setState({ name: event.target.value})}
                    // onKeyDown={this.handleSubmit}
                />
                <button onClick={ () => {
                    this.props.addRobot(this.state);
                    this.setState({ name: '' });
                    }}
                > Add Robot
                </button>
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
