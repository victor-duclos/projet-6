import { Link } from 'react-router-dom'
import { StyledLink } from '../styles/HeaderStyle'
import logo from '../assets/logo.png'
//import styled from 'styled-components'
import '../styles/header.scss'
/*const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`*/

function Header() {
  return (
    <nav className="navConteneur">
      <Link to="/">
        <img src={logo} alt="logo"/>
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/a-propos">A propos</StyledLink>
        
      </div>
    </nav>
    
  )
}

export default Header
