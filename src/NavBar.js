import React from 'react';

import './NavBar.css';

const NavBar = () => {
	return (
		<nav className="zone">
      		<ul className="main-nav">
		        <li>Settings</li>
		        <li>Rules</li>
		        <li className='first-right-nav-item'>Save</li>
		        <li>Import</li>
  			</ul>
  		</nav>
	)
}

export default NavBar;