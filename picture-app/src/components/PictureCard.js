import React from 'react';

const PictureCard = ({ picture, onEdit, onDelete }) => {
  return (
    <div className="picture-card">
      <button className="delete-button" onClick={() => onDelete(picture.id)}>X</button>
      <img src={picture.url} alt={picture.name} style={{ width: '300px', height: '200px' }} />
      <h2>{picture.name}</h2>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default PictureCard;
