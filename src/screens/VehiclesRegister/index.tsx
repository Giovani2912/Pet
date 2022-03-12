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


function VehiclesRegister() {
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
                    <Label>Cadastre seus veículos: </Label>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Marca do veículo"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Placa do veículo"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Quantidade de combustível"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Ano do veículo"
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
                                Cadastrar veículo
                            </button>
                        </Footer>
                    </form>
                </Form>
        </Container>
    );
}

export default VehiclesRegister;