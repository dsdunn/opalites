import React from 'react';
import release from '././assets/ThinkAboutMeEveryDaySingleCover.jpg';
import Spotify from '././assets/Spotify_Logo_CMYK_Green.png';
import AppleMusic from '././assets/AppleMusic.png';
import BandCamp from '././assets/bandcamp-button-square-aqua-512.png';

export const Music = () => {
  return (
    <div id="music">
      <div className="flex justify-around align-center">
        <div id="release-text" class="light-blue">
          <h3 className="uppercase"><emphasis>Dual Single Out Now!</emphasis></h3>
          <h2>"Think About Me" | "Everyday"</h2>
        </div>
        <a href="https://theopalites.bandcamp.com/album/think-about-me-everyday">
          <figure id="release-image">
            <img src={release}/>
            {/* <figcaption className="uppercase">click for download</figcaption> */}
          </figure>
        </a>
      </div>
      <div className="streaming flex justify-center align-center light-blue uppercase">
        <h3 className="uppercase">Streaming:</h3>
        <a href="https://open.spotify.com/artist/4Lv94Y3hWN7BtiEe7vzXVW?si=MO3REJ_IRTCsb1lknrO2jg"><img src={Spotify}></img></a>
        <a href="https://music.apple.com/us/artist/the-opalites/1727961912"><img src={AppleMusic}></img></a>
        <a href="https://theopalites.bandcamp.com/"><img src={BandCamp}/></a>
      </div>
    </div>
  )
}