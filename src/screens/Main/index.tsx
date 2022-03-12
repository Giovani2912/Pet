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
import manInFarm from '../../assets/farm-main.svg'

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
                    <LinkContent>
                        <MyLinkContent to="/register-product">
                            <NoteIcon />
                            Cadastrar produtos
                        </MyLinkContent>
                    </LinkContent>

                    <LinkContent>
                        <MyLinkContent to="/register-insumos">
                            <TreeIcon />
                            Cadastrar insumos 
                        </MyLinkContent>
                    </LinkContent>

                    <LinkContent>
                        <MyLinkContent to="/register-vehicles">
                            <TractorIcon />
                            Cadastrar veículos
                        </MyLinkContent>
                    </LinkContent>

                    <LinkContent>
                        <MyLinkContent to="/water-control">
                            <WaterIcon />
                            Controle de água
                        </MyLinkContent>
                    </LinkContent>
                </SideBar>

                <Welcome>
                    Bem Vindo(a) Username
                </Welcome>
                
                    

                <Img>
                    <img src={manInFarm} title='' />
                </Img>
            </Content>
            
        </Container>
    );
}

export default Main;