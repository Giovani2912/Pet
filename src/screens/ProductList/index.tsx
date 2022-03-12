import React from 'react';
import {
    Container,
    MyLink,
    Header,
    LinkGroup,
    AboutIcon
} from './styles';


function ProductList() {
    return(
        <Container>
            <Header>
                
                
                <LinkGroup>
                    <AboutIcon />
                    <MyLink to="/">Logout</MyLink>
                </LinkGroup>
            </Header>
            <h1>Product List Screen</h1>
        </Container>
    );
}

export default ProductList;