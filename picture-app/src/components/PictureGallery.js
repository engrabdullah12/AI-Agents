import React, { useState } from 'react';
import axios from 'axios';
import PictureCard from './PictureCard';
import EditPictureModal from './EditPictureModal';

const PictureGallery = () => {
  const [pictures, setPictures] = useState([]);
  const [selectedPicture, setSelectedPicture] = useState(null);

  const fetchPicture = async () => {
    const response = await axios.get('https://picsum.photos/300/200');
    const newPicture = {
      id: Date.now(), // Using Date.now() for unique id
      url: response.config.url,
      name: 'Untitled'
    };
    setPictures([...pictures, newPicture]);
  };

  const updatePictureName = (id, newName) => {
    const updatedPictures = pictures.map(picture => 
      picture.id === id ? { ...picture, name: newName } : picture
    );
    setPictures(updatedPictures);
  };

  const deletePicture = (id) => {
    const updatedPictures = pictures.filter(picture => picture.id !== id);
    setPictures(updatedPictures);
  };

  return (
    <div>
      <button onClick={fetchPicture}>Add Picture</button>
      <div className="picture-gallery">
        {pictures.map(picture => (
          <PictureCard 
            key={picture.id} 
            picture={picture} 
            onEdit={() => setSelectedPicture(picture)} 
            onDelete={deletePicture}
          />
        ))}
      </div>
      {selectedPicture && 
        <EditPictureModal 
          picture={selectedPicture} 
          onClose={() => setSelectedPicture(null)} 
          onSave={updatePictureName} 
        />}
    </div>
  );
};

export default PictureGallery;
