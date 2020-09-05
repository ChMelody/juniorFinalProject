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
    const projects = this.props.projects
    return (
      <div>
        <button type="button" >
          <Link to="/addProject">Add</Link>
        </button>
        <ul>
          {(projects.length > 0) ?
            projects.map(project => (
                <Link to={`/projects/${project.id}`} key={project.id}>
                    <h4>{project.title}</h4>
                    <p>Deadline: {project.deadline}</p>
                </Link>
            )) : 'No Projects'}
        </ul>
      </div>
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
