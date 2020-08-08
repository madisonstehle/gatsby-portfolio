import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/headshot.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>Madison Stehle</strong>,
        <br />
        Software Developer
        <br />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
