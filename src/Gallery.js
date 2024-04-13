import React from 'react';
import ImageGallery from "react-image-gallery";

const images = [
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/9-FC5A1108.jpg',
    description: 'Photo credit: Brittanie Stepp - @steppabovephotography'
  },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/10-FC5A1110.jpg',
    description: 'Photo credit: Brittanie Stepp - @steppabovephotography'
  },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/11-FC5A1113.jpg',
    description: 'Photo credit: Brittanie Stepp - @steppabovephotography'
  },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/12-FC5A1126.jpg',
    description: 'Photo credit: Brittanie Stepp - @steppabovephotography'
  },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/13-FC5A1143.jpg',
    description: 'Photo credit: Brittanie Stepp - @steppabovephotography'
  },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/14-FC5A1159.jpg',
    description: 'Photo credit: Brittanie Stepp - @steppabovephotography'
  },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/15-FC5A1181.jpg',
    description: 'Photo credit: Brittanie Stepp - @steppabovephotography'
  },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/18-FC5A1244.jpg',
    description: 'Photo credit: Brittanie Stepp - @steppabovephotography'
  },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/21-FC5A1266.jpg',
    description: 'Photo credit: Brittanie Stepp - @steppabovephotography'
  },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/23-FC5A1300.jpg',
    description: 'Photo credit: Brittanie Stepp - @steppabovephotography'
  },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/24-FC5A1308.jpg',
    description: 'Photo credit: Brittanie Stepp - @steppabovephotography'
  },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/bandshirts.jpeg',
    description: ''
  },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/Mac.jpeg',
    description: ''
  },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/Chris.jpeg',
    description: '' 
  },
  { original: 'https://band-media-bucket.s3.us-west-2.amazonaws.com/opalites/David.jpeg',
    description: '' 
  }
];

export const Gallery = (props) => {
  return (
      <ImageGallery items={images}/>
  )
}