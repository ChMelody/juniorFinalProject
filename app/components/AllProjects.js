import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProjects } from '../redux/projectsReducer'


// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProjects extends React.Component {
  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    const projects = this.props.robots
    return (
      <ul>
        {projects &&
          projects.map(project => (
            <div key={project.id}>
                <h4>{project.title}</h4>
                <ul>{project.deadline}</ul>
                <ul>{project.priority}</ul>
                <ul>{project.completed}</ul>
            </div>
          ))}
      </ul>
    )
  }
}

const mapState = state => ({
  projects: state.projects
})

const mapDispatch = dispatch => ({
  fetchProjects: () => {
    dispatch(fetchProjects())
  }
})

export default connect(mapState, mapDispatch)(AllProjects);
