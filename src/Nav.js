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
        <li className={selected === "about" ? 'selected' : ''} onClick={() => handleClick('about')}>About</li>
      </ul>
    </div>
  )
};