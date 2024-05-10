import React from 'react';
import ReactPlayer from 'react-player/lazy'

export const Video = ({ videos = [] }) => {
  return (
    <div id="video" className="flex justify-around">
      { videos.map(video => {
        return (
          <ReactPlayer
            url={video}
            controls={true}
            className="react-player"
          />
        );
      })}
    </div>
  )
}