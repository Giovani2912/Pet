import React from 'react';
import {
    Container,
    MyLink,
    Header,
    LinkGroup,
    LoginIcon,
    AboutIcon
} from './styles';


function Home() {
    return(
        <Container>
            <Header>
                <LinkGroup>
                    <LoginIcon />
                    <MyLink to="/login">Login</MyLink>
                </LinkGroup>
                
                <LinkGroup>
                    <AboutIcon />
                    <MyLink to="/about">Sobre nós</MyLink>
                </LinkGroup>
            </Header>

        </Container>
    );
}

export default Home;