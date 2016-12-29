import React, { Component, PropTypes } from 'react'
import ConfirmBattle from '../stateless/ConfirmBattle'
import Helpers from '../../utils/githubHelpers'

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
    Helpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then((players) => {
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }).catch((err) => {
        console.warn('Error in getPlayersInfo()', err)
      })
  }

  render() {
    console.log(this)
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle} />
    )
  }

  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  }
}

ConfirmBattleContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ConfirmBattleContainer
