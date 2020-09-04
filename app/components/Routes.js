import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AllProjects from './AllProjects'
import AllRobots from './AllRobots'
import SingleRobot from './SingleRobot'
import SingleProject from './SingleProject'
import CreateRobot from './CreateRobot';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home </Link>
          <ul>
            <Link to="/robots">Robots</Link>
          </ul>
          <ul>
            <Link to="/projects">Projects</Link>
          </ul>
        </nav>
        <main>
          <h1>Welcome to StackBot Project Management</h1>
            <h3>Your robot employees are awaiting assignments!</h3>
        </main>
          <Route exact path="/robots" component={AllRobots} />
          <Route exact path="/projects" component={AllProjects} />
          <Route path="/robots/:id" component={SingleRobot} />
          <Route path="/projects/:id" component={SingleProject} />
          <Route path="/robots/addForm" component={CreateRobot} />
      </div>
    </Router>
  );
};

export default Routes;
