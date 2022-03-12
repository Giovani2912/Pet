import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom';
import {FiLogIn, FiPower, FiList} from "react-icons/fi";
import {BiNotepad} from "react-icons/bi";
import {FaDog, FaTree} from 'react-icons/fa'
import {IoWaterOutline} from 'react-icons/io5'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    @media (min-width: 600px) {
        width: 100vw;
        height: 100vh;
  }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

export const SideBar = styled.div`
    width: 20vw;
    height: 90vh;
    background-color: var(--primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const LinkContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  background-color: var(--primary);

`;

export const MyLinkContent = styled(Link)`
  width: 15vw;
  font-family: Roboto 400;
  font-size: 20px;
  color: #000;
  text-decoration: none;
  background-color: #fff;
  align-items: center;
  margin-left: 0px;
  margin-right: 20px;
  padding: 5px 10px;
  border-radius: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  &:hover{
        text-decoration: none;
        color: #000;
        width: 16vw;
        height: 50px;
        border-radius: 22px;
        /* background-color: #f1e1e1; */
        font-weight: bold;
        -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
      }
`;

const iconCSS = css`
    width: 25px;
    height: 25px;
    color: #000;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
`;

export const NoteIcon = styled(BiNotepad)`
    ${iconCSS}
`;

export const TreeIcon = styled(FiList)`
    ${iconCSS}
`;


export const TractorIcon = styled(FaDog)`
    ${iconCSS}
`;


export const WaterIcon = styled(FiList)`
    ${iconCSS}
`;

export const Img = styled.div`
    width: 30vw;
    height: 30vh;
`;

export const Welcome = styled.h1`
    font-family: Roboto 400;
    font-weight: bold;
    margin: 40px;
    margin-left: -150px;
`;