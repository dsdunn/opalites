import React from 'react';
import { BandInfo
 } from './types';
export const Bio = ({ info }: { info: BandInfo | undefined}) => {
  return (
    <>
      <p id="bio" className="light-blue">{info?.bio1}</p>
      <br/>
      <p id="bio" className="light-blue">{info?.bio2}</p>
    </>
  )
}