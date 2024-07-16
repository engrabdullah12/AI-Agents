import React, { useState } from 'react';

const EditPictureModal = ({ picture, onClose, onSave }) => {
  const [newName, setNewName] = useState(picture.name);

  const handleSave = () => {
    onSave(picture.id, newName);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Edit Picture Name</h2>
      <input 
        type="text" 
        value={newName} 
        onChange={(e) => setNewName(e.target.value)} 
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditPictureModal;
