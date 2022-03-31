import React from 'react'
import { Link } from 'react-router-dom'
// import "../../../public/"

const About = () => {
  return (
    <>
    <div className='form-container'>
    <h1>Kat Inventory Management</h1>
    <h4>A reliable software for all your inventory needs.</h4>
    <p>Inventory management software for pharmacies, utilizing the FDA open drug API. Pharmacies can monitor the current inventory to help make decisions on placing additional orders to minimize over / under stocking and ultimately lower costs.</p>
    </div>
    <div className='flex-container'>
      <h3>Meet the team</h3>
    </div>
    <div className='profile-container'>

        <div className='profile-holder'>
          <div className='card-profile'>
              <img src='tkim.jpg' alt='' className='img-profile' />
          </div>
          <div className='profile-text'>
              <h3>Tae Kim</h3>
              <h4>Programmer</h4>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, quisquam! Modi iste maiores dolor delectus quis,
                esse fugiat! Dicta voluptate magnam voluptatibus consequuntur
                expedita ullam maxime explicabo, obcaecati dolorem iste!
              </h5>
              <p>
                <Link to='https://github.com/foosasugaome'><img src='portfolio.png' alt='https://github.com/foosasugaome' /></Link>
                <Link to='https://github.com/foosasugaome'><img src='gitlogo.png' alt='https://github.com/foosasugaome' /></Link>
                <Link to='https://github.com/foosasugaome'><img src='linkedin.png' alt='https://github.com/foosasugaome' /></Link>                
                </p>
          </div>                    
        </div>
          
        <div className='profile-holder'>
          <div className='card-profile'>
            <img src='jaquino.jpg' className='img-profile' alt='' />
          </div>
          <div className='profile-text'>
            <h3>Justin Aquino</h3>
            <h4>Programmer</h4>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, quisquam! Modi iste maiores dolor delectus quis,
              esse fugiat! Dicta voluptate magnam voluptatibus consequuntur
              expedita ullam maxime explicabo, obcaecati dolorem iste!
            </h5>
            <p>
                <Link to='https://github.com/foosasugaome'><img src='portfolio.png' alt='https://github.com/foosasugaome' /></Link>
                <Link to='https://github.com/foosasugaome'><img src='gitlogo.png' alt='https://github.com/foosasugaome' /></Link>
                <Link to='https://github.com/foosasugaome'><img src='linkedin.png' alt='https://github.com/foosasugaome' /></Link>                
                </p>
          </div>
          </div>
          <div className='profile-holder'>
            <div className='card-profile'>
              <img src='nteodoro.jpg' className='img-profile' alt='' />
            </div>
            <div className='profile-text'>
              <h3>Norman Teodoro</h3>
              <h4>Git Manager</h4>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, quisquam! Modi iste maiores dolor delectus quis,
                esse fugiat! Dicta voluptate magnam voluptatibus consequuntur
                expedita ullam maxime explicabo, obcaecati dolorem iste!                
              </h5>
              <p>
                <Link to='https://github.com/foosasugaome'><img src='portfolio.png' alt='https://github.com/foosasugaome' /></Link>
                <Link to='https://github.com/foosasugaome'><img src='gitlogo.png' alt='https://github.com/foosasugaome' /></Link>
                <Link to='https://github.com/foosasugaome'><img src='linkedin.png' alt='https://github.com/foosasugaome' /></Link>                
                </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default About
