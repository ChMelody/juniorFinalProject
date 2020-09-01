import axios from 'axios'

// export const setRobots = () => {};

//thunk
export const fetchRobots = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/robots')
    dispatch({
      type: 'GET_ALL_ROBOTS',
      robots: data
    })
  }
};

const initialState = {
  robots: []
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
const robotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_ROBOTS':
      return {...state, robots: action.robots}
    default:
      return state
  }
}

export default robotsReducer
