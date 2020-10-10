import React from 'react';
import webDev from './webDev.jpg';
import './App.css';
import './style.css';

function App() {
  return (
  <div>
    <div style={{border:"solid 1 black", maxWidth:"100vw"}}>
      <h1 className="title red">Nissrine Hnaïnia</h1>
      <br/>
      <img src={webDev} alt="web development theme."/>
      <br/>
      <img src="/image/semiconductor.jpg" alt="physics of semiconductors theme"/>
    </div>
    <video width="320" height="240" controls >
      <source src="myVideo.mp4" type="video/mp4"/>
    </video>
  </div>
  );
}

export default App;
