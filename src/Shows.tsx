import React from 'react';

export const Shows = ({ shows = [] }) => {
  return (
    <ul id="shows">
      {shows.map(show => (
          <li className="show flex light-blue">
            <h2 className="show-date">{show.date}</h2>
            <div>
              <a href={show.url} target="_blank"><h2>{show.venue}</h2>
                {/* { show?.image && <img src={show.image} height="50px" width="50px"/> } */}
              </a>
              <h3>{show.title}</h3>
            </div>
          </li>
        )
      )}
    </ul>
  )
}