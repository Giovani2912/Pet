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


function InsumosRegister() {
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
                    <Label>Cadastre seus insumos agrícolas: </Label>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome do insumo"
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Fornecedor do insumo"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Preço de compra"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Quantidade comprada"
                        />
                    </div>
                        <Footer>
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                            >
                                Cadastrar Insumo
                            </button>
                        </Footer>
                    </form>
                </Form>
        </Container>
    );
}

export default InsumosRegister;