import React from 'react';
import {ReactComponent as Heart} from '../imge/imgi/Heart.svg';
import {ReactComponent as Share} from '../imge/imgi/Share.svg';

import "../styles/RentalDetails.css";


export const RentalDetails = () => {
  return (
    <div className="rdcontain">

      <div className="title">
        Type of Rental
      </div>

      <div className="socials">
          <div className="location">City,Country</div>

          <div className="sns"> 
                <div className="save"><Heart/><p>Save</p></div>
                <div className="share"><Share/><p>Share</p></div>
          </div>
      </div>

      <div className="ph">
        placeholder
      </div>
      
      <div className="price">
        Price Per Night
      </div>
      
      <div className="rdp">
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        
      </div>

      <button className='sbtn'>
        Submit
      </button>

    </div>
  )
}
