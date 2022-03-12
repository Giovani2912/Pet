import React from 'react';
import {
    Container,
    Header,
    LinkArrow,
    BackLeft,
    BackHomeTitle
} from './styles'

function About(){
    return(
        <Container>
            <Header>
                <LinkArrow to='/'>
                    <BackLeft /> 
                    <BackHomeTitle>Voltar</BackHomeTitle>
                </LinkArrow>
            </Header>
        </Container>
    );
}

export default About;