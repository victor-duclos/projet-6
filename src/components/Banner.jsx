import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'C:/Users/victor/Desktop/web/kasa/src/assets/Home.png';
import Apropos from 'C:/Users/victor/Desktop/web/kasa/src/assets/A-propos.png';
import '../styles/banner.css'

/*const Banniere = styled.div`
  position: relative;

  width: 100%;
  height: 250px;
  

`
const BannerImage = styled.img`
  width: 100%;
  height: 250px;
  position: absolute;
  
  object-fit: cover;
  border-radius: 25px;

  opacity: 80%;
  mix-blend-mode: darken;
  color: #000000;
  
`

const BannerText = styled.h1`
border-radius: 25px;
background-color: rgba(0,0,0,0.4);
position: absolute;
color: #FFFFFF;
font-size:48px; 
display:flex;
align-items: center;
justify-content: center;
width:100%;
height: 100%;
margin: auto;
`*/


const Banner = ({showText}) => {
  const location = useLocation();
  const [bannerImage, setBannerImage] = useState('');

  useEffect(() => {
    // Logique pour déterminer quelle image utiliser en fonction de l'URL
    const newBannerImage = determineBannerImage(location.pathname);

    // Mettre à jour l'état avec la nouvelle image
    setBannerImage(newBannerImage);
  }, [location.pathname]); // Effect sera relancé lorsqu'il y a un changement dans location.pathname

  return (
            <div className="banniere">
              <img src={bannerImage} alt="banniere"/>
              {showText && <span>Chez vous, partout et ailleurs</span>}
            </div>
            
  );
};

// Fonction pour déterminer quelle image utiliser en fonction de l'URL
const determineBannerImage = (pathname) => {
  // Logique pour associer les différentes pages avec des images spécifiques
  if (pathname === '/a-propos') {
    return Apropos;
  }  else {
    // Image par défaut pour d'autres pages
    return Home;
  }
};

export default Banner;