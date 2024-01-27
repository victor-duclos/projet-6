import styled from 'styled-components';
import '../styles/host.css'

/*const Image=styled.img`
width: 64px;
height: 64px;
border-radius: 35px;
`
const Text= styled.span`
color: #FF6060;
font-size: 18px;

`
const CadreText= styled.div`
width: 88px;
height: 52px;
text-align: right;
line-height: 25px;

`
const Ensemble=styled.div`
width:100%;
display: flex;
justify-content: flex-end;
align-items:center;

`*/
function Host({name , picture}){


    return(
        <div className="ensemble">

            <div className="cadreText">
                <span>{name}</span>
            </div>
            <img src={picture} alt="propriétaire" />
        </div>
        

    )
}

export default Host