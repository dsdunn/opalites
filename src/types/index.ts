type Date = string;

export type Show = {
  id: string,
  date: Date,
  time: '8pm',
  image: null | string,
  venue: string,
  title: string,
  url: string
};

export type BandInfo = {
  bio1: string,
  bio2: string
}


export type Band = {
  id: string,
  name: string,
  shows: Show[],
  info: BandInfo,
  media: {
    images: string[],
    videos: string[]
  }
};

export type SectionMap = {
  [key: string]: React.RefObject<HTMLDivElement>;
};
