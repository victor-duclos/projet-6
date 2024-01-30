import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//import styled from 'styled-components';
import Home from '../assets/Home.png';
import Apropos from '../assets/A-propos.png';
import '../styles/banner.scss'

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
    const newBannerImage = determineBannerImage(location.pathname);

    setBannerImage(newBannerImage);
  }, [location.pathname]);
  return (
            <div className="banniere">
              <img src={bannerImage} alt="banniere"/>
              {showText && <span>Chez vous, partout et ailleurs</span>}
            </div>            
  );
};
const determineBannerImage = (pathname) => {
  if (pathname === '/a-propos') {
    return Apropos;
  }  else {
    return Home;
  }
};

export default Banner;