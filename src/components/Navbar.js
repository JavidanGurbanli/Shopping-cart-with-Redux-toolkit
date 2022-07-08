import React from 'react';
import World from '../images/mapImg.png';

const Navbar = () => {
    return(
      <nav>
        <img src={World}/>
         <h4>my travel journal.</h4>
      </nav>
    )
}
export default Navbar;