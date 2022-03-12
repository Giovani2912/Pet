import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #E1E1E1
    }
    html, body, #root{
        height: 100%;
    }
    *, button, input{
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }
    :root{
        --primary: #F9DF74;
        --secondary: #FFAD05;
        --tertiary: #F2F3AE;
        --input: #f9f9f9;
    }
`