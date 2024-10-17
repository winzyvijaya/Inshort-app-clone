import React from 'react';
import './NavInshort.css';
import HamburgerIcon from './HamburgerIcon';

const NavInshort = ({setCategary}) => {
  return (
    <div className='nav'>
         <div className='icon'>
            <HamburgerIcon setCategary={setCategary}/>
         </div>
         <img 
         style={{cursor: "pointer"}}
         src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" height='80%' alt='logo'
         />
    </div>
  )
}

export default NavInshort;