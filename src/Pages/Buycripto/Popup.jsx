import React from 'react';

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; // If the popup is not open, render nothing
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Popup Content</h2>
        <p>This is the content of the popup.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;