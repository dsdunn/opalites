import React from 'react';

export const Nav = ({ select, selected }) => {
  return (
    <ul id="nav" className="flex justify-around tilt-neon neon-red">
      <li className={selected === 'music' ? 'currently-selected' : ''} onClick={() => select('music')}>Music</li>
      <li className={selected === 'video' ? 'currently-selected' : ''} onClick={() => select('video')}>Video</li>
      <li className={selected === 'shows' ? 'currently-selected' : ''} onClick={() => select('shows')}>Shows</li>
      <li className={selected === 'about' ? 'currently-selected' : ''} onClick={() => select('about')}>About</li>
    </ul>
  )
};