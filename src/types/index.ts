type Date = string;

export type Show = {
  date: Date,
  time: '8pm',
  image: null | string,
  venue: string,
  title: string,
  url: string
};

export type Band = {
  id: string,
  name: string,
  shows: Show[],
  info: {
    bio1: string,
    bio2: string
  }
}