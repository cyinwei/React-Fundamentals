import React from 'react'

const Main = (props) => {
  return (
    <div className='main-container'>
      Hello from Main!
      {props.children}
    </div>
  )
}

export default Main
