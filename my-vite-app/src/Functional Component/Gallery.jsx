import React from 'react';
//import './Gallery.css'; // Optional: for styling

const Gallery = () => {
  // Array of image URLs (you can replace these with your own images)
  const images = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  return (
    <div className="gallery">
      <h1>My Gallery</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery item ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;