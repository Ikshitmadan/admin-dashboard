import React from 'react'
import './Navbar.scss'
export const Navbar = () => {
  return (
  <div className="navbar">
    <div className="logo">
        <img src="logo.svg" alt="" srcset="" />
        <span>Ikshit</span>
    </div>

    <div className="icons">
        <img src="/search.svg" alt=""  className='icon'/>
        <img src="/app.svg" alt="" className='icon' />
        <img src="/expand.svg" alt="" className='icon' />
        <div className="notifications">

            <img src="/notifications.svg" alt="" srcset="" />
            <span className='digit'>2</span>
        </div>

        <div className="users">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="" srcset="" />
            <span>Ikshit</span>
        </div>
       
    </div>
  </div>
  )
}
