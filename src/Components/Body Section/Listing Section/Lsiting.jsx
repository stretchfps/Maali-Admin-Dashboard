import React from 'react'
import './listing.css'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'

const Lsiting = () => {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>My Listing</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='secContainer flex'>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src="https://img.freepik.com/free-photo/pepper-face-plant-small-pot_53876-94408.jpg?w=826&t=st=1688407775~exp=1688408375~hmac=5e4a009e778587f3d18da042e063f1daf9e54f479d99231841e69a26ceeabb17" alt="pot"/>
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src="https://img.freepik.com/free-photo/birds-nest-plant-beige-pot_53876-134284.jpg?w=826&t=st=1688811407~exp=1688812007~hmac=d5599a9ffc15df7ee3a42953d57cc3d65398b343f57bde648882ab4e47da12dd" alt="pot"/>
          <h3>Bird's Nest Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src="https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133116.jpg?w=826&t=st=1688811729~exp=1688812329~hmac=6dcc008662b86a252155a82512741b933916e1a6af03a9d29c30ab0f66601217" alt="pot"/>
          <h3>Monstera Deliciosa</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src="https://img.freepik.com/free-photo/succulent-plant-mockup-small-gray-pot_53876-126227.jpg?w=826&t=st=1688811479~exp=1688812079~hmac=07faf0dccc842b143fdf1b0ad2699e58fa4b884031643fae49dbbf269a7d1bd5" alt="pot"/>
          <h3>Succulent</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="User Image"/>
              <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="User Image"/>
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="User Image"/>
              <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80" alt="User Image"/>
              <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="User Image"/>
            </div>
            <div className="cardText">
              <span>
                18 Plants sold <br/>
                <small>
                  49 Sellers <span className='date'>4 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
            <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="User Image"/>
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="User Image"/>
              <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="User Image"/>
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="User Image"/>
              <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80" alt="User Image"/>
            </div>
            <div className="cardText">
              <span>
                90K Plants sold <br/>
                <small>
                  108 Sellers <span className='date'>Last Month</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lsiting
