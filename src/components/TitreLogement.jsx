import styled from 'styled-components'
import '../styles/titreLogement.css'

/*const StyleTitre= styled.span`
color: #FF6060;
weight: 500;
font-size: 36px;

`
const StyleLocation= styled.span`
color: #FF6060;
weight: 500;
font-size: 25px;
`

const Ensemble=styled.div`
display:flex;
flex-direction: column;
text-align:left;
justify-content: flex-end;
`*/

function TitreLogement({title , location}){


    return(
        <div className="styleEnsembleTitre">
            <div className="styleTitre">
            <span>{title}</span>    
            </div>
            
            <div className="styleLocation">
            <span>{location}</span>    
            </div>
            
        </div>
        


    )
}

export default TitreLogement