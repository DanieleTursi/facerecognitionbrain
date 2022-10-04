import React from "react";

const Navigation = ( {onRouteChange}) => {
    return (
      <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
      </nav>
    );
}

export default Navigation