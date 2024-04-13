import React from 'react';

export const Shows = () => {
  const shows = [{
    date: '2024-05-30',
    time: '8pm',
    image: null,
    venue: 'HQ Denver',
    title: 'The Opalites w/ The Ragetones, Everybody but J + Tommyrot',
    url: 'https://fb.me/e/gHq2IcqUM'
  },
  {
    date: '2024-08-11',
    time: '7pm',
    image: 'https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/370374601_810282647452242_1402649304965174958_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JyhpSoHj7fkAb4zr2FU&_nc_ht=scontent-den2-1.xx&oh=00_AfBW-4H30DJuyLi2ZPjrdZsEmvVIT7xY5nZNhlU2D4oTCA&oe=6618EDA2',
    venue: '1010 Workshop',
    title: 'Anniversary Party with The Opalites live',
    url: 'https://www.facebook.com/1010Workshop/'
  }];

  return (
    <ul id="shows">
      {shows.map(show => {
        const showDate = new Date(show.date.split('-'));
        const month = showDate.getMonth();
        const day = showDate.getDay();

        return (
          <li className="show flex light-blue">
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