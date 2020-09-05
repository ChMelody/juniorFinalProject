
import React from 'react';
import { connect } from 'react-redux';
import { fetchRobotById } from '../redux/singleRobotReducer';


class SingleRobot extends React.Component {
    componentDidMount(){
        this.props.fetchRobotById(this.props.match.params.id)
    }

  render() {
    const {robot} = this.props.singleRobot
    return (
      <div>
        {robot && (
          <div>
            <h3>I am {robot.name}</h3>
            <ul>Fuel Type: {robot.fuelType}</ul>
            <ul>Fuel Level: {robot.fuelLevel}</ul>
            <img src={robot.imageUrl} />
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
    singleRobot: state.robot
})

const mapDispatch = dispatch => ({
    fetchRobotById: id => {
      dispatch(fetchRobotById(id))
    }
})

export default connect(mapState, mapDispatch)(SingleRobot);
