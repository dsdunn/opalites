import { FormEvent, SyntheticEvent, useEffect, useState } from 'react';
import { Show } from '../types';

export const ShowForm = ({ showToEdit, addShow, updateShow, handleCancel }: {
  showToEdit: Show | null,
  addShow: (show: Show) => void,
  updateShow: (show: Show) => void,
  handleCancel: () => void
}) => {
  const [formData, setFormData] = useState<Show>({
    date: '',
    title: '',
    venue: '',
    url: '',
    image: '',
    id: ''
  });

  useEffect(() => {
    showToEdit && setFormData(showToEdit);
  }, [showToEdit])

  const handleChange = (event: FormEvent<HTMLInputElement>)=> {
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
    if (showToEdit) {
      updateShow(formData);
    } else {
      addShow(formData)
    }

    handleCancel();
  };

  return (
    <form className="show-form" onSubmit={handleSubmit} style={{color: 'white'}}>
      <div className="show-input">
        <label>
          <div className="label">Date & Time:</div>
          <input
            required
            type="date"
            name="date"
            value={formData.date.split('T')[0]}
            onChange={handleChange}
          />
          <input
            type="time"
            name="time"
            value={ showToEdit ? showToEdit.date?.split('T')[1] : '19:00'}
          />
        </label>
      </div>
      <br />
      <div className="show-input">
        <label>
        <div className="label"> Title:</div>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
      </div>
      <br />
        <div className="show-input">
          <label>
          <div className="label">Venue:</div>
            <input
              required
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
            />
          </label>
        </div>
      <br />
      <div className="show-input">
        <label>
        <div className="label">URL/Link:</div>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
          />
        </label>
      </div>
      <br />
      <div className="show-input">
        <label>
        <div className="label">Image Url:</div>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
      </div>
      <br />
      {/* <label>
        Upload File:
        <input type="file" onChange={handleFileChange} />
      </label> */}
      <br />
      <p><button type="submit">Submit</button><button onClick={() => handleCancel()}>Cancel</button></p>
    </form>
  );
};
