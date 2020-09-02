import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import robotsReducer from './robotsReducer';

const appReducer = combineReducers({
  projects: projectsReducer,
  robots: robotsReducer,
});

export default appReducer;
