import { SyntheticEvent, useState } from 'react';
import './admin.scss';
import { Show } from '../types'
import { ShowForm } from './ShowForm';

export const AdminShows = ({ shows, addShow, updateShow, deleteShow }: {
  shows: Show[],
  addShow: (show: Show) => void,
  deleteShow: (showId: string) => void,
  updateShow: (show: Show) => void
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showToEdit, setShowToEdit] = useState<Show | null>(null);

  const handleEditShow = (show: Show) => {
    setIsEditing(true);
    setShowToEdit(show);
  }

  const handleDeleteShow = (show: Show) => {
    const { id, title } = show;
    console.log('delete');
    window.confirm(`Are you sure you want to delete the show: ${title}?`) && deleteShow(id);
  }

  const handleCancel = () => {
    setIsEditing(false);
    setShowToEdit(null);
  }

  const renderShowCard = (show: Show) => {
    return (
      <div className="show-card" >
        <p><span>Date: </span><span>{show.date}</span></p>
        <p><span>Venue: </span><span>{show.venue}</span></p>
        <p><span>Title: </span><span>{show.title}</span></p>
        <p><span>url: </span><span>{show.url}</span></p>
        <p><span>image: </span><span>{show.image}</span></p>
        <section>
          <button onClick={() => handleEditShow(show)}>Edit</button>
          <button onClick={() => handleDeleteShow(show)}>Delete</button>
        </section>
      </div>
    )
  }

  return (
    <section id="admin-shows">
      <h3 id="add-show-button" onClick={() => setIsEditing(true)}><span>Add a New Show!</span></h3>
      { isEditing && <ShowForm showToEdit={showToEdit} addShow={addShow} updateShow={updateShow} handleCancel={handleCancel}/> }
      { !isEditing && shows.map(show => {
          return renderShowCard(show);
        })
      }

    </section>
  )
}