import React from 'react';
import ImageGallery from "react-image-gallery";

const images = [
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/Chris.jpeg' },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/David.jpeg' },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/Mac.jpeg'},
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/bandshirts.jpeg'}
];

export const Gallery = (props) => {
  return (
      <ImageGallery items={images}/>
  )
}