import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import styled from 'styled-components';
import vector from '../assets/vector-haut.png';
import '../styles/collapse.css'

/*const Bouton= styled.div`
background-color:#FF6060;
border-radius: 5px;
`
const Interieur= styled.div`
background-color: #F6F6F6;
height:100%;
color: #FF6060;
border-radius: 5px;
`
const TitreCollapse= styled.span`
color: #FFFFFF;
weight: 500;

`

const StyleBouton= styled.div`
display:flex;
justify-content: space-between;
align-items:center;
padding-left: 15px;
padding-right:15px;
`*/



const CollapseComponent = ({titre , description}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (

    <div className={`collapseButton `}>
      <div className="buttonContainer">
        <span className="collapseTitle">{titre}</span>
        <img
          src={vector}
          alt="vecteur"
          className={`rotateImage ${isCollapsed ? 'rotateImage--collapsed' : 'rotateImage--expanded'}`}
          onClick={handleToggle}
        />
      </div>

      {!isCollapsed && (
        <div className="collapseContent">
          {description}
        </div>
      )}
    </div>
  );
    
};

CollapseComponent.propTypes = {

titre: PropTypes.string.isRequired,
}

export default CollapseComponent;