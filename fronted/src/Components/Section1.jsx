import React from 'react'
import "./Section1.css"
import 'bootstrap/dist/css/bootstrap.css';
const Section1 = () => {
  return (
    <div>
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
     
      <div className='section1'>
<div className="container">
    <h4>Welcome to</h4>
    <h2>PATO PLACE</h2>
    <p>Look menu</p>
</div>
    </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
     
      <div className='section1'>
<div className="container">
    <h4>Welcome to</h4>
    <h2>PATO PLACE</h2>
    <p>Look menu</p>
</div>
    </div>
    </div>
    <div class="carousel-item">
     
      <div className='section1'>
<div className="container">
    <h4>Welcome to</h4>
    <h2>PATO PLACE</h2>
    <p>Look menu</p>
</div>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  
  )
}

export default Section1