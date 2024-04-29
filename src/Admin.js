import React, { useState } from 'react';

export const Admin = ({userName, band}) => {
  const [selected, setSelected ] = useState('shows');


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
      {/* {selected === 'shows' &&
        <AdminShows />
      } */}
    </div>
  )
}