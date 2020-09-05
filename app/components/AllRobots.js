import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchRobots } from '../redux/robotsReducer';


// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  constructor(){
    super()
    this.nextPath = this.nextPath.bind(this)
  }
  componentDidMount(){
    this.props.fetchRobots()
  }

  nextPath() {
    this.props.history.push('/robots/addRobot')
  }

  render() {
    const robots = this.props.robots
    // console.log(this.props.history.nextPath)
    return (
          <div>
              <button type="button" onClick={this.nextPath}>Add</button>

            <ul>
            {robots &&
              robots.map(robot => (
                  <Link to={`/robots/${robot.id}`} key={robot.id}>
                      <img src={robot.imageUrl} />
                      <div>{robot.name}</div>
                  </Link>
              ))}
            </ul>
          </div>
    )
  }
}

const mapState = state => ({
    robots: state.robots
})

const mapDispatch = dispatch => ({
    fetchRobots: () => {
      dispatch(fetchRobots())
    }
})

export default connect(mapState, mapDispatch)(AllRobots);
