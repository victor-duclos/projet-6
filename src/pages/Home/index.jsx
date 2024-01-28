//import home from './home.png'
//import styled from 'styled-components'
import Card from 'C:/Users/victor/Desktop/web/kasa/src/components/Card.jsx'
import { Datas } from 'C:/Users/victor/Desktop/web/kasa/src/Data/Datas.jsx'
import Banner from 'C:/Users/victor/Desktop/web/kasa/src/components/Banner.jsx'
import '../../styles/home.css';


/*const Banner = styled.div`
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
`
*/

/*const Bloc= styled.div`
border: solid black 2px;
border-radius: 25px;

background-color: #F6F6F6;
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 30px;
justify-content: center;
padding:30px;
`


const Ensemble= styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`*/
/*<Banner>
              <BannerImage src= {home} />
              <BannerText>Chez vous, partout et ailleurs</BannerText>
            </Banner>*/

function Home(){

    return(
          <div className="styleEnsembleHome">
            <Banner showText={true} />
            <div className="styleBlocHome">
              {Datas.map(({id , title, cover})=> (
                <div key={id}>
                  <Card 
                  id={id}
                  title={title}
                  cover={cover}
                  />
                </div>
              ))}
              
            </div>
            </div>
            
    )
}

export default Home