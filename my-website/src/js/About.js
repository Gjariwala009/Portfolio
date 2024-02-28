import React from 'react';
import '../css/About.css';

const About = () => {
 return (
  <div className='about-page'>
    <div className="about-section">
        <div className='heading-and-email'>
          <h2>About</h2>
          <a href="mailto:gavinjariwala97@gmail.com"> gavinjariwala97@gmail.com</a>
        </div>
        <div className='description'>
          <p>Graphic Designer with over 10 years of experience specializing in IT Department management for international logistics companies.</p>
          <p>I can implement effective IT Strategies at local and global levels. My greatest strength is business awareness, which enables me to permanently streamline infrastructure and applications.</p>
        </div>
        <div className='address'>
          <p>Halifax, Nova Scotia</p>
          <p>B3N 2J3, Canada</p>
        </div>
    </div>
    <img src='/IMG_1385.jpg' alt='about' />
  </div>
    
 );
};

export default About;