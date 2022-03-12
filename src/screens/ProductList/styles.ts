import styled from 'styled-components'
import {Link} from 'react-router-dom';
import {FiLogIn} from "react-icons/fi";
import {FiPower} from "react-icons/fi";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    
    @media (min-width: 600px) {
        width: 100vw;
        height: 100vh;
  }
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

export const LinkGroup = styled.div`
    background-color: #ffc900;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
    &:hover{
        opacity: .2;
        text-decoration: none;
      }
`;


export const MyLink = styled(Link)`
  font-family: Roboto 400;
  font-size: 20px;
  color: #000;
  text-decoration: none;
  background-color: #ffc900;
  margin-left: 0px;
  margin-right: 20px;
  &:hover{
        text-decoration: none;
      }
  
`;

export const LoginIcon = styled(FiLogIn)`
    width: 25px;
    height: 25px;
    color: #000;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
  
`;

export const AboutIcon = styled(FiPower)`
    width: 25px;
    height: 25px;
    color: #000;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
  
`;