import React from 'react';
import ReactPlayer from 'react-player/lazy'

export const Video = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?app=desktop&v=agQ5DsRwFzQ"
      controls={true}
    />
  )
}