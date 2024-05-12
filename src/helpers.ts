import { Show } from "./types";

export const parseReadableDate = (_date: Date) => {
  const date = new Date(_date);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesString = (minutes < 10 ? '0'+ minutes : minutes).toString();

  return {
    monthDay: `${month}/${day}`,
    time: `${hours}${minutesString !== '00' ? ':' + minutesString : ''}${ampm}`
  }
};

export const getToken = () => {
  return localStorage.getItem('opalites_admin_token') || '';
};

export const clearToken = () => {
  localStorage.removeItem('opalites_admin_token');
}

export const compareShowDates = (showA: Show, showB: Show) => {
  const aDate = new Date(showA.date);
  const bDate = new Date(showB.date);

  return aDate > bDate ? 1 : -1;
}