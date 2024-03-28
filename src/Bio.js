import React from 'react';

const content = 'Formed in 2021, The Opalites is a 5-piece band from Denver, Colorado on a collective mission to spread the joy of ska/reggae music and pay tribute to the 60s-era Jamaican sounds that have inspired us. Catch us performing in and around the Mile High City and/or around the Front Range.';
const content2 = 'The Oplalites are excited to be releasing 3 dual-single records this year and heading back into the studio this summer. Over the last two years, we\ve had the privelege of sharing stages with "Western Standard Time Ska Orchestra", "Stop the Presses", "Skank Williams", "Last Reel Hero", "Swashbuckling Doctors", and many other stupendous stalwarts of the thriving Colorado ska scene!';

export const Bio = () => {
  return (
    <>
      <p id="bio" className="light-blue">{content}</p>
      <br/>
      <p id="bio" className="light-blue">{content2}</p>
    </>
  )
}