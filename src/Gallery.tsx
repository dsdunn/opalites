import React from 'react';
import ImageGallery from "react-image-gallery";

export const Gallery = ({ images = [] }) => {
  return (
      <ImageGallery items={images}/>
  )
}