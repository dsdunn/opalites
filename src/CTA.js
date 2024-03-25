import React from 'react';
import release from '././assets/ThinkAboutMeEveryDaySingleCover.jpg';

// https://open.spotify.com/album/5pk4CqfYbY8fIlpEEFmNMe?si=nxZ0iKaKQVWPpVGSD4nFQw

export const CTA = () => {
  return (
    <div id="cta">
      <div id="release-text" class="light-blue">
        <h3><emphasis>Dual Single Out Now!</emphasis></h3>
        <h2>"Think About Me" | "Everyday"</h2>
      </div>
      <a href="https://theopalites.bandcamp.com/album/think-about-me-everyday">
        <figure id="release-image">
          <img src={release}/>
          <figcaption>click for our bandcamp store</figcaption>
        </figure>
      </a>
    </div>
  )
}