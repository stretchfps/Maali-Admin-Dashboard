import React from 'react'

import './top.css'

import {BiSearchAlt} from 'react-icons/bi'
import {BiMessageDots} from 'react-icons/bi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiRightArrowAlt} from 'react-icons/bi'
import {BsQuestionCircle} from 'react-icons/bs'

import clip from '../../../Clips/clip.mp4'
import image from '../../../Clips/image.png'

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Maali.com</h1>
          <p>Hello User, welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type='text' placeholder='Search Dashboard'/>
          <BiSearchAlt className='icon'/>
        </div>

        <div className="adminDiv flex">
          <BiMessageDots className='icon'/>
          <IoIosNotificationsOutline className='icon'/>
          <div className="adminImage">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="admin image"/>
          </div>
        </div>


      </div>

      <div className="cardSection flex">

        <div className="rightCard flex">
          <h1>Create and Sell your products</h1>
          <p>The world's fastest growing industry is the plant industry!</p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={clip} autoPlay loop muted/>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br/> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br/> <small>140 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my Orders <BiRightArrowAlt className="icon"/>
              </span>

            </div>

            <div className="imgDiv">
              <img src={image} alt="kuchbhi"/>
            </div>
            {/* We will use this card later... */}

            <div className="sideBarCard">
              <BsQuestionCircle className='icon'/>
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>Having trouble? Please contact us for more quetions</p>
                <button className="btn">Go to help center</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Top
