import React, { useCallback}from "react";
import './FaceRecognition.css';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const FaceRecognition=({imageUrl, box})=>{

    const particlesInit = useCallback(async (engine) => {
     
        await loadFull(engine);
    }, []);
    
    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return(
        <div className="center ma">
              <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
                  <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
            <Particles className='zIndex'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%);",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "square",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        </div>
    )
}

export default FaceRecognition;