import Slideshow from '../../components/Slideshow';
import {Datas} from '../../Data/Datas';
import { useParams } from 'react-router-dom';
import Error from '../../components/Error';
import Collapse from '../../components/Collapse';
import Tag from '../../components/Tags';
import TitreLogement from '../../components/TitreLogement';
import Host from '../../components/Host';
import Rating from '../../components/Rating';
//import styled from 'styled-components'
import '../../styles/logementPage.scss'

/*const Page=styled.div`
padding-bottom: 20px;
`
const StyleTags=styled.div`
display:flex;
gap:10px;
width:100%;
flex-wrap:wrap;

`
const Essemble= styled.div`
display:flex;
justify-content: space-between;
width: 100%;
margin-bottom: 25px;
margin-top: 15px;

`
const PartieGauche=styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap:20px;
width:100%;
`
const PartieDroite= styled.div`
display:flex;
flex-wrap: wrap;
flex-direction:column;
justify-content: flex-start;
align-items: center;
gap: 20px;

`
const StyleCollapse= styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: space-arround;
gap: 80px;
`*/

const Logement = () => {
    const { id } = useParams();
    const logement = Datas.find((data) => data.id === id);
    
    if (!logement) {
        // Gérer le cas où aucun logement n'est trouvé pour l'ID spécifié
        return <Error />
      }
    return (
        <div className="stylePageLogement">
        
        <Slideshow images={logement.pictures} />
        
        <div className="styleEnsembleTitreLogement">
        <div className="stylePartieGauche">
        <TitreLogement
        title={logement.title}
        location={logement.location} 
        />
        
        {/* Ajoutez d'autres éléments de présentation selon vos besoins */}
        
        <div className="styleTagLogement">
        {logement.tags.map((tag , index)=>(
          <div key={index}>
            <Tag
            tags={tag}
            />
            </div>
        ))}
        </div>
        </div>

        <div className="stylePartieDroite">
        <Host 
        name={logement.host.name}
        picture={logement.host.picture}
        />
        
        <Rating
        rating={logement.rating}
        />
        </div>
        </div>
        
        <div className="styleCollapseLogement">
        <Collapse 
        titre={Object.keys(Datas[0])[4]}
        description={logement.description}
        />
        <Collapse 
        titre={Object.keys(Datas[0])[8]}
        description={logement.équipements.map((équipement, index) => (
          <li className="listStyle" key={index}>{équipement}</li>
        ))}
        />
        </div>

      </div>
    );
  };


export default Logement