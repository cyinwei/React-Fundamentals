import React, { Component, PropTypes }  from 'react'

const styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px'
  }
}

class Loading extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: this.props.text
    }

    this.originalText = this.props.text
  }

  componentDidMount() {
    let repeat = this.state.text + '...'
    this.interval = setInterval(() => {
      if (this.state.text === repeat) {
        this.setState({
          text: this.originalText
        })
      }
      else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.props.speed)

  }

  render() {
    console.log(this)

    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
}

Loading.propTypes = {
  speed: PropTypes.number,
  text: PropTypes.string
}

Loading.defaultProps = {
  speed: 300,
  text: 'Loading'
}

export default Loading
