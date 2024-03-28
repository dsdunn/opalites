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
      <h2 className="neon-blue section-header">Music</h2>
      <Music/>
      <Divider navId="nav-video"/>
      <h2 className="neon-blue section-header">Video</h2>
      <Video/>
      <Divider navId="nav-shows"/>
      <h2 className="neon-blue section-header">Shows</h2>
      <Shows/>
      <Divider navId="nav-about"/>
      <h2 className="neon-blue section-header">About</h2>
      <Bio/>
      <Divider navId="nav-gallery"/>
      <h2 className="neon-blue section-header">Gallery</h2>
      <Gallery/>
      <Divider navId="end"/>
      <h2 id="contact-link" className="neon-blue section-header">Contact: <a className="light-blue" href="mailto: theopalitesmusic@gmail.com">theopalitesmusic@gmail.com</a></h2>
    </div>
  )
}

export default App
