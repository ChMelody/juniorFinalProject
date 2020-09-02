import axios from 'axios'

// get robot by id
export const fetchRobotById = id => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/robots/${id}`)
      dispatch({
        type: 'GET_ROBOT_BY_ID',
        robot: data
      })
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = {
    robot: []
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
const singleRobotReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ROBOT_BY_ID':
      return {...state, robot: action.robot}

    default:
      return state
  }
}

export default singleRobotReducer
