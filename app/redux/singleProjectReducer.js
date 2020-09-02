import axios from 'axios'

// get robot by id
export const fetchProjectById = id => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/projects/${id}`)
      dispatch({
        type: 'GET_PROJECT_BY_ID',
        robot: data
      })
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = {
    project: []
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
const singleProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROJECT_BY_ID':
      return {...state, project: action.project}

    default:
      return state
  }
}

export default singleProjectReducer
