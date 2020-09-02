import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AllProjects from './AllProjects'
import AllRobots from './AllRobots'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
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
          <Route exact path="/" component={AllRobots} />
          <Route exact path="/projects" component={AllProjects} />
      </div>
    </Router>
  );
};

export default Routes;
