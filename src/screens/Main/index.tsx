import React from 'react';
import {
    Container,
    Content,
    MyLink,
    Header,
    LinkGroup,
    AboutIcon,
    SideBar,
    LinkContent,
    MyLinkContent,
    NoteIcon,
    TreeIcon,
    TractorIcon,
    WaterIcon,
    Img,
    Welcome
} from './styles';
import dog from '../../assets/dog.svg'

function Main() {
    return(
        <Container>
            <Header>
                <LinkGroup>
                    <AboutIcon />
                    <MyLink to="/">Logout</MyLink>
                </LinkGroup>
            </Header>
            <Content>
                <SideBar>
                    {/* <LinkContent>
                        <MyLinkContent to="/register-product">
                            <NoteIcon />
                            Cadastrar produtos
                        </MyLinkContent>
                    </LinkContent> */}

                    <LinkContent>
                        <MyLinkContent to="/list-dogs">
                            <TreeIcon />
                            Lista de Cachorros 
                        </MyLinkContent>
                    </LinkContent>

                    <LinkContent>
                        <MyLinkContent to="/register-dogs">
                            <TractorIcon />
                            Cadastrar Cachorro
                        </MyLinkContent>
                    </LinkContent>

                    {/* <LinkContent>
                        <MyLinkContent to="/water-control">
                            <WaterIcon />
                            Controle de água
                        </MyLinkContent>
                    </LinkContent> */}
                </SideBar>

                <Welcome>
                    Bem Vindo(a) Username
                </Welcome>
                
                    

                <Img>
                    <img src={dog} title='' />
                </Img>
            </Content>
            
        </Container>
    );
}

export default Main;