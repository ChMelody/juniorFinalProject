import axios from 'axios'

export const setRobots = robots => ({
  type: 'GET_ALL_ROBOTS',
  robots
})

export const addRobots = robots => ({
  type: 'ADD_ROBOT',
  robots
})

//thunk
export const fetchRobots = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/robots')
      dispatch(setRobots(data))
    } catch (error) {
      console.error(error)
    }
  }
};

const initialState = []

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
const robotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_ROBOTS':
      return action.robots

    case 'ADD_ROBOT':
      return [...state, action.robots ]

    default:
      return state
  }
}

export default robotsReducer
