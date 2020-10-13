import React from 'react';
import reactLogo from './reactLogo.png';
import jsLogo from './js-logo.png';
import nameIcon from './nameIcon.png';
import './App.css';
import './style.css';
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="main"> 
      <div className="Col left" style={{border:"solid 1 black", maxWidth:"100vw"}}>
        <nav className="navbar navbar-light bg-light">
          <ul className="nvbar">
            <a href="#"><img src={nameIcon} width="60" height="60" alt="Logo"/></a>
            <li class="nav-item active"><a class="nav-link" href="#Home">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#About">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#Work">Work</a></li>
          </ul> 
        </nav>
        <div className="intro"> Hey there! 
          <br/>
          <br/>
          I'm settled in Tunis and I specialize in web development.
        </div>
        <iframe width="400" height="250" src="https://www.youtube.com/embed/FXTqPsvVT6k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <footer>All rights reserved © 2020</footer>
      </div>
      <div className="Col right">
        <h1 className="title red">Hnaïnia Nissrine</h1>
        <br/>
        <div>
          <p>
            I am a physics PhD student and a web developer in the making. I started full stack 
            development courses simultaniously with my research work. My goal is to learn front-end and back-end
            tools.
          </p>
          <p>
            In addition to my educational projects, I dedicate a fair amount of my time to learning new languages
            and exploring cultural identities through music and cinema. Along with movies and series, I enjoy watching
            cult cartoons and Japenese anime.
          </p>
          <img className="symbol" src={reactLogo} alt="React logo"/>
          <img className="symbol" src={jsLogo} alt="JS logo"/>
          <img className="symbol" src="/image/cssLogo.png" alt="CSS logo"/>
          <img className="symbol" src="/image/htmlLogo.png" alt="HTML logo"/>
        </div>
        <div>
          <ul className="contacts">
            <li><a className ="contact" href="#"><FaGithub/></a></li>
            <li><a className ="contact" href="#"><FaFacebook/></a></li>
            <li><a className ="contact" href="#"><FaLinkedin/></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
