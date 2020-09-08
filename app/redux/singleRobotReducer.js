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
      console.error('Problem with fetchRobotById', error)
    }
  }
}

export const updateReducer = (id, updatedRobot) => {
  return async (dispatch) => {
    try {
      await axios.put(`/api/robots/${id}/updates`, updatedRobot)
      dispatch({
        type: 'UPDATE_ROBOT',
        robot: updatedRobot
      })
      dispatch(fetchRobotById(id))
    } catch (error) {
      console.error('Problem with Robot updateReducer', error)
    }
  }
}

export const updateRobot = (id, updatedData) => {
  return async (dispatch) => {
    try {
      await axios.put(`/api/robots/${id}`, updatedData)
      dispatch({
        type: 'UPDATE_ROBOT',
        robot: updatedData
      })
      dispatch(fetchRobotById(id))
    } catch (error) {
      console.error('Problem with updating', error)
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
    case 'UPDATE_ROBOT':
      return {...state, robot: action.robot}
    default:
      return state
  }
}

export default singleRobotReducer
