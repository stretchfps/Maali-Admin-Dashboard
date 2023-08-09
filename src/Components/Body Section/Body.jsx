import React from 'react'
import './body.css'
import Top from './Top Section/Top'
import Lsiting from './Listing Section/Lsiting'
import Activity from './Activity Section/Activity'

const Body = () => {
  return (
    <div className='mainContent'>
      <Top/>

      <div className='bottom flex'>
        <Lsiting/>
        <Activity/>
      </div>
    </div>
  )
}

export default Body
