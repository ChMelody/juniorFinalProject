
import React from 'react';
import { connect } from 'react-redux';
import { fetchProjectById } from '../redux/singleProjectReducer';


class SingleProject extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         priority: low
    //     }
    // }
    componentDidMount(){
        this.props.fetchProjectById(this.props.match.params.id)
    }

    handleSubmit (event) {
        event.preventDefault()
        try {
            this.props.history.push('/projects')
        } catch (error) {
            console.error('Problem in handleSubmit: ', error)
        }
    }

  render() {
    const {project} = this.props.singleProject
    console.log('project: ', project)
    return (
        <div>
            <form action="GET" onSubmit={this.handleSubmit}>
                <label>Project: {project.title}</label>
                <br />
                <label>Deadline: {project.deadline}</label>
                <br />
                <label>Priority: {project.priority}</label>
                <br />
                <label>Status: {(project.completed && 'Completed!') || 'Not Complete'}</label>
                <br />
                <label>Description: {project.description}</label>
            </form>
        </div>
    )
  }
}

const mapState = state => ({
    singleProject: state.project
})

const mapDispatch = dispatch => ({
    fetchProjectById: id => {
      dispatch(fetchProjectById(id))
    }
})

export default connect(mapState, mapDispatch)(SingleProject);
