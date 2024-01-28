import Banner from 'C:/Users/victor/Desktop/web/kasa/src/components/Banner.jsx';
import Collapse from 'C:/Users/victor/Desktop/web/kasa/src/components/Collapse.jsx'
//import styled from 'styled-components';
import '../../styles/propos.css';

 const proposList = [
  {"id":1,
    "titre" :"Fiabilité",
    "description" : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photossont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"},
  {"id" : 2,
    "titre" :"Respect", 
    "description" : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinnage entraînera une exclusion de notre plateforme."},
  {"id": 3,
    "titre": "Service",
    "description" : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinnage entraînera une exclusion de notre plateforme."},
  {"id": 4,
    "titre" :"Sécurité",
    "description" : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."},
 ]

/*const StylePropos = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin: 35px;
`*/

function Apropos() {
    return (
        
      <div>
        <Banner showText={false} />
        
        <div className="stylePropos">
        {proposList.map(({id , titre , description})=> (
          
          <div key={id}>
            <Collapse
            titre={titre}
            description={description}
            />
            
            </div>
            
        ))}
        </div>
      </div>
    )
  }
  
  export default Apropos