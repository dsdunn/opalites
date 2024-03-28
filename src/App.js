import react, { useState } from 'react';
import './App.scss'
import { Nav } from './Nav';
import { Gallery } from './Gallery';
import { Bio } from './Bio';
import { Video } from './Video';
import { Divider } from './Divider';
import { Music } from './Music';
import { Shows } from './Shows';

function App() {
  const [ selected, setSelected ] = useState(null);

  const musicSection = document.getElementById('nav-music');
  const videoSection = document.getElementById('nav-video');
  const showsSection = document.getElementById('nav-shows');

  const sectionMap = {
    music: musicSection,
    video: videoSection,
    shows: showsSection
  }
  // const musicSection = domument.getElementById('nav-music');
  // const musicSection = domument.getElementById('nav-music');
  const select = (target) => {
    setSelected(target);
    sectionMap[target]?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div id="app">
      <div id="hero">
        <div id="hero-overlay"/>
        <h1 id="hero-text" className="monoton neon-blue">THE<br/> OPALITES</h1>
        <h3 className="subtitle light-blue text-center">Ska - Rocksteady - Reggae</h3>
      </div>
      <Nav select={select} selected={selected}/>
      <Divider navId="nav-music"/>
      <Music/>
      <Divider navId="nav-video"/>
      <Video/>
      <Divider navId="nav-shows"/>
      <Shows/>
      {/* <div id="about" className="flex mobile-stack mobile-reverse">
        <Gallery/>
        <Bio/>
      </div> */}
    </div>
  )
}

export default App
