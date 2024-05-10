import React, { FormEvent, SyntheticEvent, useState } from 'react';
import { Band, Show } from '../types';

export const ShowForm = ({ shows, addShow, deleteShow, updateShow }: {
  shows: Show[],
  addShow: (show: Show) => void,
  deleteShow: (showId: string) => void,
  updateShow: (show: Show) => void
}) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    title: '',
    venue: '',
    url: '',
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>)=> {
    const { name, value } = event.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setFormData({
  //     ...formData,
  //     file: file,
  //   });
  // };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      
      <label>
        Upload File:
        {/* <input type="file" onChange={handleFileChange} /> */}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
