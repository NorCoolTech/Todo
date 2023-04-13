import React from 'react'
import { useState } from 'react'

const SingleItem = ({ item, removeItem, editItem, editName }) => {
  const [isChecked, setIsChecked] = useState(item.completed);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');

  const handleEditName = () => {
    setIsEditing(true);
  }
  
  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewName('')
  }

  const handleSaveEdit = () => {
    if (newName) {
      editName(item.id, newName);
      setIsEditing(false);
      setNewName('');
    }
  }


  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      {isEditing ? (
        <div className="edit-box">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter a new name"
          />
          <button className="btn cancel-btn" onClick={handleCancelEdit}>
            Cancel
          </button>
          <button className="btn save-btn" onClick={handleSaveEdit}>
            Save
          </button>
        </div>
      ) : (
        <p
          style={{
            textDecoration: item.completed && "line-through",
          }}
          onDoubleClick={handleEditName}
        >
          {item.name}
        </p>
      )}
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
      <button className="btn edit-btn" type="button" onClick={handleEditName}>
        edit
      </button>
    </div>
  );
};

export default SingleItem