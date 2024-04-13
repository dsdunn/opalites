import React, { useState } from 'react';

export const Nav = ({ select, selected }) => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleClick = (selection) => {
    select(selection);
    setMenuOpen(false);
  }

  return (
    <div id="nav">
      <h3 className="neon-blue uppercase" onClick={toggleMenu}>Menu</h3>
      <ul className={`${menuOpen ? "expanded" : ""} flex flex-column justify-around tilt-neon neon-red`}>
        <li className={selected === "music" ? 'selected' : ''} onClick={() => handleClick('music')}>Music</li>
        <li className={selected === "video" ? 'selected' : ''} onClick={() => handleClick('video')}>Video</li>
        <li className={selected === "shows" ? 'selected' : ''} onClick={() => handleClick('shows')}>Shows</li>
        <li className={selected === "bio" ? 'selected' : ''} onClick={() => handleClick('bio')}>About</li>
        <li className={selected === "gallery" ? 'selected' : ''} onClick={() => handleClick('gallery')}>Gallery</li>
        <li className={selected === "contact" ? 'selected' : ''} onClick={() => handleClick('contact')}>Contact</li>
      </ul>
    </div>
  )
};