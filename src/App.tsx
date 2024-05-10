import React, { useState, useRef, useEffect } from 'react';
import './App.scss'
import { Nav } from './Nav';
import { Gallery } from './Gallery';
import { Bio } from './Bio';
import { Video } from './Video';
import { Divider } from './Divider';
import { Music } from './Music';
import { Shows } from './Shows';
import { SocialLinks } from './SocialLinks';
import { Login } from './Login';
import { Admin } from './Admin';
import { band as seed_data } from './seed_data';

import { getData as _getData, putData as _putData } from './apiService';

function App() {
  const musicRef = useRef();
  const videoRef = useRef();
  const showsRef = useRef();
  const bioRef = useRef();
  const galleryRef = useRef();
  const contactRef = useRef();

  const [ band, setBand ] = useState(null);
  const [ selected, setSelected ] = useState(null);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ user, setUser ] = useState(null);
  const [ userName, setUserName] = useState(null);

  const onOpen = () => setIsModalOpen(true);
  const onClose = () => setIsModalOpen(false);
  
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

  const getData = async (abortSignal) => {
    const data = await _getData(abortSignal);

    console.log(data);
    setBand(data);
  }

  const putData = async () => {
    const data = await _putData(user?.AccessToken, seed_data);
    console.log(data)
  }

  useEffect( () => {
    const abortController = new AbortController();
    getData(abortController.signal);

    return () => {
      abortController.abort();
    };

  }, [])

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
      <Video videos={band?.media?.videos}/>
      <Divider navId="nav-shows" ref={showsRef}/>
      <h2 className="neon-blue section-header">Shows</h2>
      <Shows shows={band?.shows}/>
      <Divider navId="nav-about" ref={bioRef}/>
      <h2 className="neon-blue section-header">About</h2>
      <Bio info={band?.info}/>
      <Divider navId="nav-gallery" ref={galleryRef}/>
      <h2 className="neon-blue section-header">Gallery</h2>
      <Gallery images={band?.media?.images}/>
      <Divider navId="nav-contact" ref={contactRef}/>
      <h2 id="contact-link" className="neon-blue section-header">Contact: <a className="light-blue" href="mailto: theopalitesmusic@gmail.com">theopalitesmusic@gmail.com</a></h2>
      <SocialLinks/>
      <h3 id="footer" className="neon-red" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</h3>
      <p id="admin-login" className="neon-red" style={{textAlign: 'right'}} isOpen={isModalOpen} onClick={onOpen}>{user ? `Logout ${userName}` : 'Admin'}</p>
      <Login isOpen={isModalOpen} onClose={onClose} setUser={setUser} setUserName={setUserName}/>
      { user && <Admin userName={userName} band={band} />}
    </div>
  )
}

export default App
