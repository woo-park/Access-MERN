import React from 'react';
import {Link} from 'react-router-dom';
import image from '../assets/logo.png';


function Nav() {

  //colors
  let brown = '#7B3E19';
  let skin = '#B28B84';
  let pink = '#F5E5FC';
  let skyblue = '#8AE1FC';
  let blue = '#48B8D0';

  const navStyle = {
    color: 'black'
  }

  const logoStyle = {
    color: 'white'
  }

  return (
    <div className="nav">
      <nav>
        <ul className="nav-links" >


          <li ><Link style={navStyle} to="/"><span className='glass'>Home</span></Link></li>



          <li><Link style={navStyle} to="/about"><span className='glass'>About</span></Link></li>


          <li className ='nav_logo' ><Link style={logoStyle} to="/"><img className = 'logo_img' src={image} width="110px" /></Link></li>



          <li><Link style={navStyle} to="/gallery"><span className='glass'>Gallery</span></Link></li>



          <li className ='nav_lastchild' ><Link style={navStyle} to="/mywork"><span className='glass'>Completed</span></Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
