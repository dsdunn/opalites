import React from 'react';

export const Shows = () => {
  const shows = [{
    date: '5/30',
    time: '8pm',
    image: null,
    venue: 'HQ Denver',
    title: 'The Opalites w/ The Ragetones, Everybody but J + Tommyrot',
    url: 'https://fb.me/e/gHq2IcqUM'
  },
  {
    date: '8/11',
    time: '7pm',
    image: null,
    venue: '1010 Workshop',
    title: 'Anniversary Party with The Opalites live',
    url: 'https://www.facebook.com/1010Workshop/'
  }];

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