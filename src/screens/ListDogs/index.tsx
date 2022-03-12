import React from 'react';
import {
    Container,
    Header,
    LinkArrow,
    BackHomeTitle,
    BackLeft,
    Content,
    Left,
    Right
} from './styles';


function InsumosRegister() {
    return(
        <Container>
           <Header>
                <LinkArrow to='/main'>
                    <BackLeft /> 
                    <BackHomeTitle>Voltar</BackHomeTitle>
                </LinkArrow>                
            </Header>

            <Content>
                <Left></Left>
                <Right></Right>
            </Content>
        </Container>
    );
}

export default InsumosRegister;