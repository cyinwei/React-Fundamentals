import React, { Component } from 'react'
import Results from '../stateless/Results'
import Helpers from '../../utils/githubHelpers'

class ResultsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      scores: []
    }
  }

  componentDidMount() {
    Helpers.battle(this.props.location.state.playersInfo)
      .then((scores) => {
        this.setState({
          scores: scores,
          isLoading: false
        })
      })
  }

  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo} />
    )
  }
}

export default ResultsContainer
