import React, { Component, PropTypes } from 'react'
import ConfirmBattle from '../stateless/ConfirmBattle'

class ConfirmBattleContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      playersInfo: []
    }
  }

  componentDidMount() {
    let query = this.props.location.query
  }
  
  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ConfirmBattleContainer
