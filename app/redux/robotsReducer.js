import axios from 'axios'

const setRobots = (data) => {
  return {
    type: 'SET_ROBOTS',
    robots: data
  }
}

// get all robots
export const fetchRobots = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/robots')
      dispatch(setRobots(data))
    } catch (error) {
      console.error('Problem in fetchRobotsReducer: ', error)
    }
  }
};


export const addRobot = (robot) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/robots', robot)
      dispatch({
        type: 'ADD_ROBOT',
        robot: robot
      })
      const { data } = await axios.get('api/robots')
      dispatch(setRobots(data))
      console.log('test in thunk: ', data)
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
    case 'SET_ROBOTS':
      return action.robots

    case 'ADD_ROBOT':
      return [...state, action.robot]
    default:
      return state
  }
}

export default robotsReducer

