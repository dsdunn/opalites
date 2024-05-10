import React, { useState, useEffect } from 'react';
import { ShowForm } from './ShowForm'

export const Admin = ({userName, band}) => {
  const [shows, setSelected ] = useState('shows');

  useEffect(() => {
    setShows(band.shows);
  }, [])


  return (
    <div id="admin">
      <h2 className="neon-blue uppercase text-center">{`VIP Area`}</h2>
      <div id="admin-menu">
        <ul className="flex justify-around tilt-neon neon-red">
          <li className={selected === "shows" ? 'selected' : ''} onClick={() => setSelected('shows')}>Shows</li>
          <li className={selected === "video" ? 'selected' : ''} onClick={() => setSelected('media')}>Media</li>
          <li className={selected === "shows" ? 'selected' : ''} onClick={() => setSelected('info')}>Info</li>
        </ul>
      </div>
      {selected === 'shows' &&
        <ShowForm shows={shows} addShow={addShow} deleteShow={deleteShow} updateShow={updateShow}/>
      }
    </div>
  )
}