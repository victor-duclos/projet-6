import styled from 'styled-components'
import logoError from '../assets/404.png'
import { StyledLink } from '../styles/HeaderStyle'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  align-items: center;
  gap: 150px;
`



const ErrorSubtitle = styled.h1`
  font-weight: 300;
  color: #FF6060;
`

const Illustration = styled.img`
  max-width: 800px;
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