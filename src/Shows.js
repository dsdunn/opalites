import React from 'react';

export const Shows = () => {
  const shows = [{
    date: '2024-05-30',
    time: '8pm',
    image: null,
    venue: 'HQ Denver',
    title: 'The Opalites w/ The Ragetones, Everybody but J + Tommyrot',
    url: 'https://fb.me/e/gHq2IcqUM'
  }];

  return (
    <ul id="shows">
      {shows.map(show => {
        const showDate = new Date(show.date.split('-'));
        const month = showDate.getMonth();
        const day = showDate.getDay();

        return (
          <li className="show flex justify-center light-blue">
            <h2 className="show-date">
              <span className="month">{month}</span>/<span className="day">{day}</span>
            </h2>
            <div>
              <a href={show.url} target="_blank"><h2>{show.venue}</h2></a>
              <h3>{show.title}</h3>
            </div>
          </li>
        );
      })}
    </ul>
  )
}