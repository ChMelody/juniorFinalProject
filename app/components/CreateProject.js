import React from 'react'
import { connect } from 'react-redux';
import { addProject } from '../redux/projectsReducer'



class CreateRobot extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            priority: null,
            completed: false,
            description: null
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
            this.props.history.push('/projects')
        } catch (error) {
            console.error('Problem in handleSubmit: ', error)
        }
    }

    render() {
        console.log('props', this.props)
        return (
            <div>
                <h1>New Project</h1>
                <form action="POST" onSubmit={this.handleSubmit}>
                    <label htmlFor="project">
                        {!this.props.title && (
                            <span>Project title: </span>
                        )}
                    </label>
                    <input type="text" name="title" onChange={this.handleChange} />
                    <br />

                    <label htmlFor="deadline">
                        Deadline:
                    </label>
                    <input type="text" name="deadline" onChange={this.handleChange} />
                    <br />

                    <label htmlFor="priority">
                        Priority:
                    </label>
                    <input type="text" name="priority" onChange={this.handleChange} />
                    <br />

                    <label htmlFor="completed">
                        Completed:
                    </label>
                    <input type="text" name="completed" onChange={this.handleChange} />
                    <br />

                    <label htmlFor="description">
                        Description:
                    </label>
                    <input type="text" name="description" onChange={this.handleChange} />
                    <br />

                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

const mapState = state => ({
    projects: state.projects
})

// make props
const mapDispatch = dispatch => {
    return {
        addNew: project => {
            dispatch(addProject(project))
        }
    }
}

export default connect(mapState, mapDispatch)(CreateRobot)


/*

*/
