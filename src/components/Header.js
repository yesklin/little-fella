import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="grid-4 small bangers-family header headCard">
        <h1><Link className="aqua">HOME</Link></h1>
        <h1><Link>PROJECTS</Link></h1>
        <h1><Link>ABOUT ME</Link></h1>
        <h1><Link>CONTACT</Link></h1>
    </nav>
  )
}

export default Header;
