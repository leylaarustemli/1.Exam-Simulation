import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className='header'>
<div className="container">
  <div className="left-header">
    <img src="https://preview.colorlib.com/theme/pato/images/icons/logo.png" alt="" />
  </div>
  <div className="center-header">
    <ul>
      <li> <Link to="/">HOME</Link></li>
      <li>MENU</li>
      <li>RESERVATION</li>
      <li>GALLERY</li>
      <li>ABOUT</li>
      <li>BLOG</li>
      <li>CONTACT</li>
    </ul>
  </div>
  <div className="right-header">
  <i class="fa-brands fa-github"></i>
  <i class="fa-brands fa-facebook"></i>
  <i class="fa-brands fa-twitter"></i>
  <i class="fa-solid fa-bars"></i>
 <Link to="/basket"><i class="fa-solid fa-basket-shopping"></i></Link> 
  </div>
</div>
    </div>
  )
}

export default Header