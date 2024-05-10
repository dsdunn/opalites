import React from 'react';
import ImageGallery from "react-image-gallery";

export const Gallery = ({ images = [] }: {images: string[] | undefined}) => {
  return (
      <ImageGallery items={images}/>
  )
}