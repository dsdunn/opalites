import React, { useState, useEffect } from 'react';
import { ShowForm } from './ShowForm'
import { Band, Show } from '../types';
import { putData } from '../apiService';

export const Admin = ({ userName, band, putData }: { userName: string, band: Band, putData: (band: Band) => void}) => {
  const [selected, setSelected] = useState('shows');

  const deleteShow = (showId: string) => {
    console.log('delete: ', showId)
  };

  const addShow = (show: Show) => {
    // do some checks?
    const newBand = {
      ...band,
      shows: [
        ...band.shows,
        show
      ]
    }

    putData(newBand);
  }

  const updateShow = (show: Show) => {
    const newShows = band.shows.filter(existingShow => show.id !== existingShow.id).push(show)
  }


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
        <ShowForm shows={band.shows} addShow={addShow} deleteShow={deleteShow} updateShow={updateShow}/>
      }
    </div>
  )
}