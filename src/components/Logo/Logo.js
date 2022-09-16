import React from "react";
import Tilt from 'react-parallax-tilt';
import styled from 'styled-components';



const Logo = () => {
    return (
<LogoDiv className="ma4 mt0">
 <Tilt>
      <div style={{ height: '150px', width: '150px', backgroundColor: 'transparent' }}>
        <h1> 👀</h1>
      </div>
 </Tilt>
</LogoDiv>
    )
};

const LogoDiv = styled.div`
background: linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%);
border: 1px solid white;
border-radius: 20px;
width:150px;
`;
export default Logo;