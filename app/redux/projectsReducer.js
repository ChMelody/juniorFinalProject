import axios from 'axios'

const setProjects = data => ({
  type: 'SET_PROJECT',
  projects: data
})


export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/projects')
      dispatch(setProjects(data))
    } catch (error) {
      console.error('Problem in fetchProjectReducer: ', error)
    }
  }
};

export const addProject = (project) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/projects', project)
      dispatch({
        type: 'ADD_PROJECT',
        project: project
      })
      const { data } = await axios.get('api/projects')
      dispatch(setProjects(data))
    } catch (error) {
      console.error('Problem in addProjectReducer: ', error)
    }
  }
}

const initialState = []

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PROJECT':
      return action.projects

    case 'ADD_PROJECT':
      return [...state, action.project]

    default:
      return state
  }
}
