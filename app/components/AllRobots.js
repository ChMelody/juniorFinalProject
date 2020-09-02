import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchRobots } from '../redux/robotsReducer';

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  componentDidMount(){
    this.props.fetchRobots()
    // console.log('??:', this.props)

  }
  render() {
    const robots = this.props.robots
    // console.log('uuu', robots)
    return (
      <ul>
        {robots &&
          robots.map(robot => (
              <Link to={`/robots/${robot.id}`} key={robot.id}>
                <div className="robots">
                  {robot.name}
                  <img src={robot.imageUrl} />
                </div>
              </Link>
          ))}
      </ul>
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
