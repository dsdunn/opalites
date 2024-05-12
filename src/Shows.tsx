import React from 'react';
import { Show } from './types';
import { compareShowDates, parseReadableDate } from './helpers';


export const Shows = ({ shows }: {shows: Show[] }) => {
  return (
    <ul id="shows">
      {shows.sort(compareShowDates).map(show => {
        const showDate = new Date(show.date);
        const { monthDay, time } = parseReadableDate(showDate);

        return (
          <li className="show flex light-blue">
            <h2 className="show-date">{monthDay}<span className="show-time"> {time} </span></h2>
            <div>
              <a href={show.url} target="_blank"><h2>{show.venue}</h2>
                { show?.image && <img src={show.image} height="50px" width="50px"/> }
              </a>
              <h3>{show.title}</h3>
            </div>
          </li>
        )}
      )}
    </ul>
  )
}