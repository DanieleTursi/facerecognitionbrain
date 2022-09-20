import React from 'react';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';


const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
       {/* <Particles className='particles'
          params={particlesOptions}
        /> */}
        <ParticlesBackground />
     <Navigation />
     <Logo />
     <Rank />
     <ImageLinkForm/>
     {/* {
        
        <FaceRecognition />} */}
    </div>
  );
}

export default App;
