import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import robotsReducer from './robotsReducer';
import singleRobotReducer from './singleRobotReducer';
import singleProjectReducer from './singleProjectReducer'

const appReducer = combineReducers({
  projects: projectsReducer,
  robots: robotsReducer,
  robot: singleRobotReducer,
  project: singleProjectReducer
});

export default appReducer;
