import styled from "styled-components";
import {Link} from 'react-router-dom';
import {FiArrowLeft} from "react-icons/fi";

export const Container = styled.div`

`;

export const Header = styled.div`
    background: rgb(255,201,0);
    background: linear-gradient(90deg, rgba(255,201,0,1) 0%, rgba(255,201,0,1) 30%, rgba(250,246,231,1) 100%);
    height: 10vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-flex-start;
`;

export const LinkArrow = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
      &:hover{
        opacity: .2;
        text-decoration: none;
      }
`;

export const BackHomeTitle = styled.h1`
    font-family: Roboto 400;
    font-size: 25px;
    font-weight: bold;
    background-color: transparent;
    text-decoration: none;
    color: #000;
    margin-top: 6px;
   

`;

export const BackLeft = styled(FiArrowLeft)`
    width: 25px;
    height: 25px;
    color: #000;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
  
`;