import React from 'react';
import ReactPlayer from 'react-player/lazy'

export const Video = () => {
  return (
    <div id="video" className="flex justify-around">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=JNQzljTVZsI"
        controls={true}
        className="react-player"
      />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=fw-V5S2z_Aw&t=73s"
        controls={true}
        className="react-player"
      />
    </div>
  )
}