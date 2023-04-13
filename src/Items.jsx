import React from 'react'
import SingleItem from './SingleItem';

const Items = ({ items, removeItem, editItem, editName }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
            editName={editName}
          />
        );
      })}
    </div>
  );
};

export default Items