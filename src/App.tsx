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
import { Admin } from './admin';
import { band as seed_data } from './seed_data';

import { getData as _getData, putData as _putData, getUser as _getUser } from './apiService';
import { Band, SectionMap } from './types';

function App() {
  const musicRef = useRef(null);
  const videoRef = useRef(null);
  const showsRef = useRef(null);
  const bioRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const [ band, setBand ] = useState<Band | null>(null);
  const [ section, setSection ] = useState<string>('');
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const [ user, setUser ] = useState<any>(null);
  const [ userName, setUserName] = useState<string>('');

  const onOpen = () => setIsModalOpen(true);
  const onClose = () => setIsModalOpen(false);

  const sectionMap: SectionMap = {
    music: musicRef,
    video: videoRef,
    shows: showsRef,
    bio: bioRef,
    gallery: galleryRef,
    contact: contactRef
  }

  const select = (target: string) => {
    sectionMap[target]?.current?.scrollIntoView({behavior: 'smooth'});
    setSection(target);
  }

  const getData = async (abortSignal: AbortSignal) => {
    const data = await _getData(abortSignal);
    data && setBand(data);
  }

  const getUser = async (token: string) => {
    const user = await _getUser(token);
    user && setUser(user);
  }

  const putData = async (band: Band) => {
    const token = user.AccessToken;
    try {
      const response = await _putData(token, band);
      setBand(band);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSetUser = (user: any) => {
    setUser(user);
    localStorage.setItem('opalites_admin_token', user.AccessToken);
  }

  useEffect( () => {
    const abortController = new AbortController();
    getData(abortController.signal);

    const token = localStorage.getItem('opalites_admin_token');
    
    if (token) {
      getUser(token);
    }


    return () => {
      abortController.abort();
    };

  }, [])

  return (
    <div id="app">
      <Nav select={select} selected={section}/>
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
      <Video videos={band?.media.videos || []}/>
      <Divider navId="nav-shows" ref={showsRef}/>
      <h2 className="neon-blue section-header">Shows</h2>
      <Shows shows={band?.shows || []}/>
      <Divider navId="nav-about" ref={bioRef}/>
      <h2 className="neon-blue section-header">About</h2>
      <Bio info={band?.info}/>
      <Divider navId="nav-gallery" ref={galleryRef}/>
      <h2 className="neon-blue section-header">Gallery</h2>
      <Gallery images={band?.media.images}/>
      <Divider navId="nav-contact" ref={contactRef}/>
      <h2 id="contact-link" className="neon-blue section-header">Contact: <a className="light-blue" href="mailto: theopalitesmusic@gmail.com">theopalitesmusic@gmail.com</a></h2>
      <SocialLinks/>
      <h3 id="footer" className="neon-red" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</h3>
      <p id="admin-login" className="neon-red" style={{textAlign: 'right'}} onClick={onOpen}>{user ? `Logout ${userName}` : 'Admin'}</p>
      <Login isOpen={isModalOpen} onClose={onClose} setUser={handleSetUser} setUserName={setUserName}/>
      { user && band && <Admin userName={userName} band={band} putData={putData} setBand={setBand}/>}
    </div>
  )
}

export default App
