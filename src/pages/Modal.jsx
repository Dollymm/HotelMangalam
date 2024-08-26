// components/Modal.js
import React from 'react';

const Modal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative max-w-3xl max-h-full">
        <img
          src={image}
          alt="Full size"
          className="w-full h-auto object-contain"
        />
        <button
          className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
