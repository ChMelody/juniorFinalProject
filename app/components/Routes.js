import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AllProjects from './AllProjects'
import AllRobots from './AllRobots'
import SingleRobot from './SingleRobot'
import SingleProject from './SingleProject'
import CreateRobot from './CreateRobot';
import CreateProject from './CreateProject'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
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
      
          <Switch>
            <Route exact path="/robots" component={AllRobots} />
            <Route exact path="/projects" component={AllProjects} />
            <Route exact path="/robots/:id" component={SingleRobot} />
            <Route exact path="/projects/:id" component={SingleProject} />
            <Route exact path="/addRobot" component={CreateRobot} />
            <Route exact path="/addProject" component={CreateProject} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
