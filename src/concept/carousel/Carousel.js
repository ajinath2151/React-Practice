import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file for styling

const Carousel = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const goToPrevItem = () => {
    setCurrentItem((prevItem) => (prevItem === 0 ? items.length - 1 : prevItem - 1));
  };

  const goToNextItem = () => {
    setCurrentItem((prevItem) => (prevItem === items.length - 1 ? 0 : prevItem + 1));
  };

  return (
    <>
    <h1>React Carousel Example</h1>
    <div className="carousel">
      <div className="carousel-container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentItem ? 'active' : ''}`}
          >
            <img src={item.image} alt={item.text} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <button className="prev" onClick={goToPrevItem}>&#8249;</button>
      <button className="next" onClick={goToNextItem}>&#8250;</button>
    </div>
    </>
  );
};

export default Carousel;
