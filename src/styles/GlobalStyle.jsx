
import { createGlobalStyle } from 'styled-components'


const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }

    body {
        margin:0;

        .content-container {
          max-width: 1440px;
          margin: auto;
          padding-left: 45px;
          padding-right: 45px;


        @media screen and (min-width:300px) and (max-width:620px){
          padding-left:20px;
        padding-right: 20px
      }
        
    }
`
//réfléchir sur le sujet du width 1240px pour le body
function GlobalStyle() {
  
  return <StyledGlobalStyle />
}

export default GlobalStyle
