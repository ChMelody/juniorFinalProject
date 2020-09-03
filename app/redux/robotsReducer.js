import axios from 'axios'

// get all robots
export const fetchRobots = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/robots')
      // console.log('did axios fetch anything? ', data) -> nothing
      dispatch({
        type: 'GET_ALL_ROBOTS',
        robots: data
      })
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

    default:
      return state
  }
}

export default robotsReducer


// extras
// export const setRobots = robots => ({

// })

// export const getRobotById = data => ({
//   type: 'GET_ROBOT_BY_ID',
//   data
// })

// export const addRobots = robots => ({
//   type: 'ADD_ROBOT',
//   robots
// })
