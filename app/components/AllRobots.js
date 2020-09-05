import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchRobots, deleteRobot } from '../redux/robotsReducer';


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
    console.log('robots: ', this.props.removeRobot)
    return (
      <div>
          <button type="button" >
            <Link to="/addRobot">Add</Link>
          </button>
          <div>
          {(robots.length > 0) ?
            robots.map(robot => (
              <div key={robot.id} className="container">
                <Link to={`/robots/${robot.id}`} >
                  <br />
                    <div className="title">{robot.name}</div>
                    <br />
                    <button type="button" >
                      <Link to={`/robots/${robot.id}/updates`}>Update Me</Link>
                    </button>
                    <br />
                    <img src={robot.imageUrl} />
                </Link>
                <button
                  type="button"
                  onClick={() => this.props.removeRobot(robot.id)}
                >X
                </button>
              </div>
          )) : 'No Robots'}
          </div>
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
    },
    removeRobot: id => {
      dispatch(deleteRobot(id))
    }
})

export default connect(mapState, mapDispatch)(AllRobots);
