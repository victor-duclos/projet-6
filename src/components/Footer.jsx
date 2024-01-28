import logo from '../assets/logo-white.png'
//import styled from 'styled-components'
import '../styles/footer.css'

/*const FooterLogo = styled.img`
  height: 70px;
  
`

const FooterContainer = styled.div`
  padding: 30px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: black;
`
const FooterText = styled.span`
color: white;
`*/

function Footer (){
    return(
        <div className="footerConteneur">
          <img src={logo} alt="logo"/>
          <span>© 2020 Kasa. All rights reserved</span>
        </div>
        
    )
}

export default Footer