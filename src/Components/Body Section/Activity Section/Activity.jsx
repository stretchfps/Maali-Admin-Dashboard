import React from 'react'
import './activity.css'

import {BiRightArrowAlt} from 'react-icons/bi'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All
          <BiRightArrowAlt className="icon"/>
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="cx image"/>
          <div className="customerDetails">
            <span className='name'>Aastha Dubey</span>
            <small>Ordered a new plant!</small>
          </div>

          <div className="duration">
            2 mins ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="cx image"/>
          <div className="customerDetails">
            <span className='name'>Pramod Sahay</span>
            <small>Ordered a new plant!</small>
          </div>

          <div className="duration">
            5 mins ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="cx image"/>
          <div className="customerDetails">
            <span className='name'>Shanti Joshi</span>
            <small>Ordered a new plant!</small>
          </div>

          <div className="duration">
            6 mins ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80" alt="cx image"/>
          <div className="customerDetails">
            <span className='name'>Vaijanti Desai</span>
            <small>Ordered a new plant!</small>
          </div>

          <div className="duration">
            10 mins ago
          </div>
        </div>

      </div>
    </div>
  )
}

export default Activity
