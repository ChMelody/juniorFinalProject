
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchRobotById, updateRobot } from '../redux/singleRobotReducer';


class SingleRobot extends React.Component {
    componentDidMount(){
        this.props.fetchRobotById(this.props.match.params.id)
    }

  render() {
    const {robot} = this.props.singleRobot
    return (
      <div>
        {robot && (
<<<<<<< Updated upstream
          <div className="container">
            <h2 className="title">I am {robot.name}</h2>
=======
          <div>
            <h3>
              I am {robot.name}
              <button type="button" >
                <Link to="/updateRobot" />
                Update
              </button>
            </h3>
>>>>>>> Stashed changes
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
    },
    updateRobot: (id, data) => {
      dispatch(updateRobot(id, data))
    }
})

export default connect(mapState, mapDispatch)(SingleRobot);
