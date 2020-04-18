import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="grid-4 very-small bangers-family header">
        <h1><Link to='/' className="header-button">HOME</Link></h1>
        <h1><Link to='/projects' className='header-button'>PROJECTS</Link></h1>
        <h1><Link to='/aboutme' className='header-button'>ABOUT ME</Link></h1>
        <h1><Link to='/contact' className='header-button'>CONTACT</Link></h1>
    </nav>
  )
}

export default Header;
