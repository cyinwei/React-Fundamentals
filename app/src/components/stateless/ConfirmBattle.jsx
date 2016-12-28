import React from 'react'
import Helpers from '../../utils/githubHelpers'

const ConfirmBattle = (props) => {
  return (
    props.isLoading === true
      ? <p> LOADING </p>
    : <div>CONFIRM BATTLE!: {Helpers.puke(props)}</div>
  )
}

export default ConfirmBattle
