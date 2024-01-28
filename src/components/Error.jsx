import styled from 'styled-components'
import logoError from '../assets/404.png'
import { StyledLink } from '../styles/HeaderStyle'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: space-around;
  height: 600px;
  @media screen and (min-width:300px) and (max-width:620px){
  justify-content: space-around;
    }
`



const ErrorSubtitle = styled.h1`
  font-weight: 300;
  color: #FF6060;
  font-size: 36px;
  
  @media screen and (min-width:300px) and (max-width:620px){
  font-size: 18px;
  padding-left: 30px;
    }
`

const Illustration = styled.img`
  max-width: 800px;

  @media screen and (min-width:300px) and (max-width:620px){
        
    width: 198px;
    height: 99px;
        
    }
`

function Error() {
  return (
    <ErrorWrapper>
      
      <Illustration src={logoError} />
      <ErrorSubtitle>
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
    </ErrorWrapper>
  )
}

export default Error