import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import {
    Container,
    Header,
    Footer,
    Linke,
    Form,
    Label,
    LinkArrow,
    BackHomeTitle,
    BackLeft
} from './styles';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");

    function handleLogin(){
        console.log(name, email, city, cpf, senha)
    }

    const history = useHistory();
    function handleRegister(){
        if(name.length!==0 && email.length!==0 && city.length!==0){
            history.push('/login')
        }
        
    }
    return(
        <Container>
            <Header>
                <LinkArrow to='/'>
                    <BackLeft /> 
                    <BackHomeTitle>Voltar</BackHomeTitle>
                </LinkArrow>  
            </Header>
            <Form>
                <form onSubmit={handleLogin}>
                    <Label>Crie sua conta: </Label>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Nome"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Cidade"
                            onChange={e => setCity(e.target.value)}
                            value={city}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="CPF"
                            onChange={e => setCpf(e.target.value)}
                            value={cpf}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Senha"
                            onChange={e => setSenha(e.target.value)}
                            value={senha}
                        />
                    </div>
                    <div className="form-check">
                        <input 
                            type="checkbox" 
                            className="form-check-input"
                        />
                        <label className="form-check-label">Receber emails</label>
                    </div>
                        <Footer>
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                onClick={handleRegister}
                            >Cadastrar</button>
                            <Linke to='/login'>Já tenho cadastro</Linke>
                        </Footer>
                    </form>
                </Form>
        </Container>
    );
}

export default Register;