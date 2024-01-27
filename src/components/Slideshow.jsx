import React, { useState } from 'react';
import PropTypes from 'prop-types';
import vectorLeft from '../assets/vector-left.png';
import vectorRight from '../assets/vector-right.png';
import styled from 'styled-components';
import '../styles/slideshow.css'

/*const StyleBoutonLeft= styled.img`
max-width: 47px;
max-height: 79px;
background-color: black;


`
const StyleBoutonRight= styled.img`
max-width: 47px;
max-height: 79px;
background-color: black;
`
const StyleSlide= styled.img`

width:100%;
height:415px;
border-radius:25px
`

const Style= styled.div`
width:100%;

`*/

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshowConteneur">
        
          <img className="styleSlide" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        

        {images.length > 1 && (
        <img className="styleBoutonLeft" src={vectorLeft} alt="vecteur" onClick={goToPrevSlide}/>
           )}
        {images.length > 1 && (
        <span className="compteur">{currentSlide + 1}/{images.length}</span>
           )}
        {images.length > 1 && (
        <img className="styleBoutonRight" src={vectorRight} alt="vecteur" onClick={goToNextSlide}/>
           )}

        </div>
    
  );
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;