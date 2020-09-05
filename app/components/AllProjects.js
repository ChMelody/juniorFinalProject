import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProjects, deleteProject } from '../redux/projectsReducer'


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
        <button type="button">
          <Link to="/addProject">Add</Link>
        </button>
        <div>
          {(projects.length > 0) ?
            projects.map(project => (
              <div key={project.id} className="container">
                <Link to={`/projects/${project.id}`}>
                  <br />
                  <button type="button" >
                    <Link to={`/projects/${project.id}/updates`}>Update Me</Link>
                  </button>
                  <br />
                  <h2 className="title">{project.title}</h2>
                </Link>
                  <li>Deadline: {project.deadline}</li>
                  <button
                    type="button"
                    align="right"
                    onClick={() => this.props.removeProject(project.id)}
                  >X
                  </button>
              </div>
          )) : 'No Projects'}
        </div>
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
  },
  removeProject: id => {
    dispatch(deleteProject(id))
  }
})

export default connect(mapState, mapDispatch)(AllProjects);
