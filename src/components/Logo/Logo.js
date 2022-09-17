import React from "react";
import Tilt from 'react-parallax-tilt';
import styled from 'styled-components';
import brain from './brain.png';



const Logo = () => {
    return (
<div className="ma4 mt0">
 <Tilt style={{ height: '100px', width: '100px', backgroundColor: 'transparent', border: '1px solid white', borderRadius: '20px' }}>
      <div className="pa3">
       <img src={brain} alt='brainlogo'></img>
      </div>
 </Tilt>
</div>
    )
};

// const LogoDiv = styled.div`
// background: linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%);
// border: 1px solid white;
// border-radius: 20px;
// width:100px;

// img {
//   padding:35px;
// }
// `;
export default Logo;