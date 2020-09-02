
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
            <h3>{robot.name}</h3>
            <img src={robot.imageUrl} />
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
