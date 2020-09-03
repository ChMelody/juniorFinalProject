import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchRobots } from '../redux/robotsReducer';
import CreateRobot from './CreateRobot'
import axios from 'axios';


// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: []
    }
    this.addRobot = this.addRobot.bind(this)
  }
  componentDidMount(){
    this.props.fetchRobots()
    // console.log('THIS ', this.props.fetchRobots())
    // await this.setState({robots: this.props.fetchRobots()})
    // this.setState({robots: data})
  }

  addRobot (robot) {
    this.setState({
      robots: [...this.state.robots, robot]
    })
  }
  render() {
    const robots = this.props.robots
    // console.log('oo', this.addRobot)
    return (
          <div>
            <CreateRobot addRobot={this.addRobot} />
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
