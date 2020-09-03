
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

  render() {
    const {project} = this.props.singleProject
    console.log('project: ', project)
    return (
        <div>
            {project && (
                <div>
                    <h4>Project: {project.title}</h4>
                    <ul>Deadline: {project.deadline}</ul>
                    <ul>Priority: {project.priority}</ul>
                    <ul>Status: {(project.completed && 'Completed!') || 'Not Complete'}
                    </ul>
                </div>
            )}
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