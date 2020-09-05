import axios from 'axios'

export const setProjects = projects => ({
  type: 'GET_ALL_PROJECTS',
  projects
})


export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/projects')
      dispatch(setProjects(data))
    } catch (error) {
      console.error(error)
    }
  }
};

const initialState = []

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_PROJECTS':
      return action.projects

    default:
      return state
  }
}
