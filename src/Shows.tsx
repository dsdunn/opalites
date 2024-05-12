import React, { SyntheticEvent, useState } from 'react';
import { Show } from './types';
import { compareShowDates, parseReadableDate } from './helpers';

const ImageModal = ({ image, closeModal }: { image: string, closeModal: (event: SyntheticEvent, image: string) => void }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '100'
      }}
    >
      <div className="flex justify-center" style={{position: 'relative', height: '100%', width: '100%'}}>
        <button
          onClick={(e) => closeModal(e, '')}
          style={{
            position: 'absolute',
            top: '3%',
            right: '3%',
            cursor: 'pointer',
            backgroundColor: 'white',
            border: 'none',
            fontSize: '36px',
          }}
        >
          &times;
        </button>
        <img src={image} style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto'}} />
      </div>
    </div>
  )
}


export const Shows = ({ shows }: {shows: Show[] }) => {
  const [ modalImage, setModalImage ] = useState('');

  const toggleModal = (event: SyntheticEvent, image: string) => {
    event.preventDefault();

    if (image) {
      setModalImage(image);
    } else {
      setModalImage('');
    }
  };

  return (
    <>
      <ul id="shows">
        {shows.sort(compareShowDates).map(show => {
          const showDate = new Date(show.date);
          const { monthDay, time } = parseReadableDate(showDate);

          return (
            <li className="show light-blue">
              <div className="show-left-side">
                <h2>
                  <span className="show-date">{monthDay}</span>
                  <span className="show-time">{time}</span>
                </h2>
                <h2>{show.venue}</h2>
              </div>
              <div className="show-right-side">
                { 
                show?.image && <img src={show.image} onClick={(e) => toggleModal(e, show.image)}/>
                }
                
                <h3 className="show-title">
                  <a href={show.url} target="_blank">
                    {show.title}
                  </a>
                </h3>
              </div>
            </li>
          )}
        )}
      </ul>
      { modalImage && <ImageModal image={modalImage} closeModal={toggleModal} /> }
      </>
  )
}