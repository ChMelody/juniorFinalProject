import React from 'react';
import { connect } from 'react-redux';
import { Link, Router } from 'react-router-dom'
import { fetchRobots } from '../redux/robotsReducer';


// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {

  componentDidMount(){
    this.props.getRobots()
  }

  // nextPath() {
  //   this.props.history.push('/robots/addRobot')
  // }

  render() {
    const robots = this.props.robots
    console.log('!!', this.props.robots)
    return (
          <div>
              <button type="button" >
                <Link to="/addRobot">Add</Link>
              </button>
              <ul>
              {(robots.length > 0) ?
                robots.map(robot => (
                    <Link to={`/robots/${robot.id}`} key={robot.id}>
                        <img src={robot.imageUrl} />
                        <div>{robot.name}</div>
                    </Link>
                )) : 'No Robots'}
              </ul>
          </div>
    )
  }
}

const mapState = state => ({
    robots: state.robots
})

const mapDispatch = dispatch => ({
    getRobots: () => {
      dispatch(fetchRobots())
    }
})

export default connect(mapState, mapDispatch)(AllRobots);
