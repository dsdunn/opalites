import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '.'

import { AdminShows } from './AdminShows';
import { Band, Show } from '../types';

export const Admin = ({ userName, band, putData, setBand }: 
  { userName: string,
    band: Band,
    putData: (band: Band) => void,
    setBand: (band: Band) => void
  }) => {
  const [selected, setSelected] = useState('shows');

  const deleteShow = (showId: string) => {
    const newBand = {
      ...band,
      shows: band.shows.filter(show => show.id !== showId)
    }

    putData(newBand);
  };

  const addShow = (show: Show) => {
    const newId = uuidv4();
    // do some checks?
    const newBand = {
      ...band,
      shows: [
        ...band.shows,
        {
          ...show,
          id: newId
        }
      ]
    }
    
    putData(newBand);
  }

  const updateShow = (newShow: Show) => {
    const otherShows = band.shows.filter(existingShow => newShow.id !== existingShow.id);
    const newBand = {
      ...band,
      shows: [...otherShows, newShow]
    };

    putData(newBand);
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
        <AdminShows shows={band.shows} addShow={addShow} deleteShow={deleteShow} updateShow={updateShow} />
      }
    </div>
  )
}