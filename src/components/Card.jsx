import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../styles/card.css'

/*const Carte= styled.div`
position: relative;
border-radius: 20px;
width:100%;
height: 340px;
`
const Cartetext= styled.span`
color: white;
position: absolute;
width: 100%;
bottom: 10px;
left:10px;
weight: 500;
font-size: 20px;
`

const CarteImage= styled.img`

object-fit:cover;
width:100%;
height:100%;
border-radius: 10px;
`*/


function Card({ id, title, cover }) {
    return (
      <div className="carte">
        <Link to={`/logement/${id}`}>
        <img src={cover} alt="logement" />
        <span>{title}</span>
        </Link>
      </div>
      
    )
  }
  
  Card.propTypes = {
    
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }
  
  
  
  export default Card