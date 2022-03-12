import React from 'react';
import {
    Container,
    Header,
    LinkArrow,
    BackHomeTitle,
    BackLeft,
    Form,
    Label,
    Footer
} from './styles';


function ProductRegister() {
    return(
        <Container>
            <Header>
                <LinkArrow to='/main'>
                    <BackLeft /> 
                    <BackHomeTitle>Voltar</BackHomeTitle>
                </LinkArrow>                
            </Header>

            <Form>
                <form>
                    <Label>Cadastre seu produto: </Label>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome do produto"
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Custo para produção do KG"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Preço de venda"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Quantidade de KGS produzido no mês"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="file" 
                            className="form-control"
                            id="input-file" 
                        />
                    </div>
                        <Footer>
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                            >
                                Cadastrar Produto
                            </button>
                        </Footer>
                    </form>
                </Form>
        </Container>
    );
}

export default ProductRegister;