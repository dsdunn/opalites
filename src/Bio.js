import React from 'react';

export const Bio = ({info}) => {
  return (
    <>
      <p id="bio" className="light-blue">{info?.bio1}</p>
      <br/>
      <p id="bio" className="light-blue">{info?.bio2}</p>
    </>
  )
}