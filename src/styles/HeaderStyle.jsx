import { Link } from 'react-router-dom'
import colors from './colors'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${colors.primary} ;
  text-decoration: none;
  font-size: 24px;
  weight: 500;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width:300px) and (max-width:620px){
    font-size:12px
}
 
`