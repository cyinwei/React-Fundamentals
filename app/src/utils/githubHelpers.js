import axios from 'axios'
import React from 'react'

const getUserInfo = (username) => {
  return axios.get('https://api.github.com/users/' + username)
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
  }
}

export default Helpers
