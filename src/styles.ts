import styled, { createGlobalStyle } from 'styled-components'

export const color = {
  pink: '#E66767',
  pink2: '#FFEBD9',
  white: '#ffffff',
  white2: '#FFF8F2'
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }
      
    body {
        height: 100%;
        position: relative;
        background-color: ${color.white2}; 
    }
        
    .container { 
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`
export const Brand = styled.img`
  display: block;
  margin: 0 auto;
`
