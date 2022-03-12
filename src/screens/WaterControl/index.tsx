import React from 'react';
import {
    Container,
    Header,
    LinkArrow,
    BackHomeTitle,
    BackLeft
} from './styles';


function WaterControl() {
    return(
        <Container>
            <Header>
                <LinkArrow to='/main'>
                    <BackLeft /> 
                    <BackHomeTitle>Voltar</BackHomeTitle>
                </LinkArrow>                
            </Header>
            <h1>Water controll Screen</h1>
        </Container>
    );
}

export default WaterControl;