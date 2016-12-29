import axios from 'axios'
import React from 'react'

const getUserInfo = (username) => {
  return axios.get('https://api.github.com/users/' + username)
}

const getRepos = (username) => {
  return axios.get('https://api.github.com/users/' + username + '/repos')
}

const getTotalStars = (repos) => {
  //find the total stars the player has
  return repos.data.reduce((prev, current) => {
    return prev + current.stargazers_count
  }, 0)
}

const getPlayersData = (player) => {
  return getRepos(player.login)
    .then(getTotalStars)
    .then((totalStars) => {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

const calculateScores = (players) => {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

const Helpers = {
  getPlayersInfo: function(players) {
    //fetch some data from github
    return axios.all(players.map((username) => {
      return getUserInfo(username)
    })).then((info) => {
      return info.map((user) => user.data)
    })
  },

  puke: function(obj) {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>
  },

  battle: function(players) {
    let playerOneData = getPlayersData(players[0]);
    let playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch((err) => {
        console.warn('Err in battle(): ', err)
      })
  }
}

export default Helpers
