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
                    <Label>Cadastre seu Cachorro: </Label>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Raça do cachorro"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Cor do cachorro"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Idade"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Descriçao"
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
                                Cadastrar Cachorro
                            </button>
                        </Footer>
                    </form>
                </Form>
        </Container>
    );
}

export default VehiclesRegister;