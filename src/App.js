import react, { useState, useRef } from 'react';
import './App.scss'
import { Nav } from './Nav';
import { Gallery } from './Gallery';
import { Bio } from './Bio';
import { Video } from './Video';
import { Divider } from './Divider';
import { Music } from './Music';
import { Shows } from './Shows';
import { SocialLinks } from './SocialLinks';

function App() {
  const musicRef = useRef();
  const videoRef = useRef();
  const showsRef = useRef();
  const bioRef = useRef();
  const galleryRef = useRef();
  const contactRef = useRef();

  const [ selected, setSelected ] = useState(null);
  
  const sectionMap = {
    music: musicRef,
    video: videoRef,
    shows: showsRef,
    bio: bioRef,
    gallery: galleryRef,
    contact: contactRef
  }

  const select = (target) => {
    sectionMap[target]?.current?.scrollIntoView({behavior: 'smooth'});
    setSelected(target);
  }

  return (
    <div id="app">
      <Nav select={select} selected={selected}/>
      <div id="hero">
        <div id="hero-overlay"/>
        <h1 id="hero-text" className="monoton neon-blue">THE<br/> OPALITES</h1>
        <h3 className="subtitle light-blue text-center">Ska - Rocksteady - Reggae</h3>
      </div>
      <Divider navId="nav-music" ref={musicRef}/>
      <h2 className="neon-blue section-header">Music</h2>
      <Music/>
      <Divider navId="nav-video" ref={videoRef}/>
      <h2 className="neon-blue section-header">Video</h2>
      <Video/>
      <Divider navId="nav-shows" ref={showsRef}/>
      <h2 className="neon-blue section-header">Shows</h2>
      <Shows/>
      <Divider navId="nav-about" ref={bioRef}/>
      <h2 className="neon-blue section-header">About</h2>
      <Bio/>
      <Divider navId="nav-gallery" ref={galleryRef}/>
      <h2 className="neon-blue section-header">Gallery</h2>
      <Gallery/>
      <Divider navId="nav-contact" ref={contactRef}/>
      <h2 id="contact-link" className="neon-blue section-header">Contact: <a className="light-blue" href="mailto: theopalitesmusic@gmail.com">theopalitesmusic@gmail.com</a></h2>
      <SocialLinks/>
      <h3 id="footer" className="neon-red" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</h3>
    </div>
  )
}

export default App
