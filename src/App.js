import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './index.css';
import './App.css';
import { render } from '@testing-library/react';


const app = new Clarifai.App({
    apiKey: 'f098004c61634e5392f87d487717f17b'
   });

   class App extends Component {
    constructor(){
        super();
        this.state={
            input:'',
            imageUrl:'',
            box:{},
        }
    }

// function App() {
  calculateFaceLocation=(data)=>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log( width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
    

  }
    onInputChange = (event) => {
        this.setState({input: event.target.value});
      }

    onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input});
        app.models
          .predict(
        // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
        // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
        // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
        // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
        // is to use a different version of their model that works like the ones found here: https://github.com/Clarifai/clarifai-javascript/blob/master/src/index.js
        // so you would change from:
        // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        // to:
        // .predict('53e1df302c079b3db8a0a36033ed2d15', this.state.input)
            Clarifai.FACE_DETECT_MODEL,
            this.state.input)
          .then(response => {
            console.log('hi', response)
            if (response) {
              fetch('http://localhost:3000/image', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  id: this.state.user.id
                })
              })
                .then(response => response.json())
                .then(count => {
                  this.setState(Object.assign(this.state.user, { entries: count}))
                })
    
            }
            this.displayFaceBox(this.calculateFaceLocation(response))
          })
          .catch(err => console.log(err));
      }

render(){
  return (
    <div className="App">
     <Navigation />
     <Logo />
     <Rank />
     <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
     { <FaceRecognition imageUrl={this.state.imageUrl}/>}
    </div>
  );
  }
}

export default App;
