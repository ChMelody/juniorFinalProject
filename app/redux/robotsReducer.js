import axios from 'axios'

// get all robots
export const fetchRobots = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/robots')
      dispatch({
        type: 'GET_ALL_ROBOTS',
        robots: data
      })
    } catch (error) {
      console.error('Problem in fetchRobotsReducer: ', error)
    }
  }
};

export const addRobot = (robot) => {
  return async (dispatch) => {
    try {
      const { addedRobot } = await axios.post('/api/robots/addRobot', robot)
      dispatch({
        type: 'ADD_ROBOT',
        robot: addedRobot
      })
    } catch (error) {
      console.error('Problem in addRobotReducer: ', error)
    }
  }
}


const initialState = []

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
const robotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_ROBOTS':
      return action.robots

    case 'ADD_ROBOT':
      return [...state, action.robot]
    default:
      return state
  }
}

export default robotsReducer

