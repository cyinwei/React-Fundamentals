import React, { PropTypes } from 'react'
import Helpers from '../../utils/githubHelpers'

const Results = (props) => {
  return (
    <div>
      Results: {Helpers.puke(props)}
    </div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results
