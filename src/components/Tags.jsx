//import styled from 'styled-components'
//import PropTypes from 'prop-types'
import '../styles/tags.scss';
/*const StyleTag= styled.span`

color: white;
font-size: 14px;

`
const StyleText= styled.div`
background-color: #FF6060;
border-radius: 10px;
padding-left:25px;
padding-right:25px;
height: 25px;
display:flex;
align-items: center;
justify-content: center;
`*/


function Tag({tags}){

    return(
        <div className="styleTag">
            <span>{tags}</span>
        </div>
        
    )

}

export default Tag