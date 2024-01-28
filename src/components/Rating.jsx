import React from 'react';
import PropTypes from 'prop-types';
//import styled from 'styled-components';
import star from '../assets/star.png';
import starInactive from '../assets/star-inactive.png';
import '../styles/rating.css'



const Rating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const remainingStars = 5 - filledStars;

  const renderStars = (num, isFilled) => {
    const stars = [];
    const starImage= isFilled ? star : starInactive;
    for (let i = 0; i < num; i++) {
      stars.push(<img key={i} src={starImage} alt={`Star ${i + 1}`} />);
    }
    return stars;
  };

  return (
    <div className="starConteneur">
      {renderStars(filledStars, true)}
      {renderStars(remainingStars, false)}
    </div>
    
  );
};

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;