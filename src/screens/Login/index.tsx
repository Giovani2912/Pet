import React,{useState} from 'react';
import {
    Container,
    Header,
    Footer,
    Linke,
    Form,
    Label,
    BackLeft,
    LinkArrow,
    BackHomeTitle
} from './styles';
import {useHistory} from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    // function handleLogin(){
    //     console.log(name, email, city, cpf, senha)
    // }

    const history = useHistory()
    function handleLogin(){
        if(senha.length!==0 && email.length!==0){
            history.push('/main')
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
                <form>
                    <Label>Entre com sua conta: </Label>
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
                            type="password" 
                            className="form-control" 
                            placeholder="Senha"
                            onChange={e => setSenha(e.target.value)}
                            value={senha}
                        />
                    </div>
                    
                        <Footer>
                            <button 
                                type="submit"  
                                className="btn btn-primary"
                                onClick={handleLogin}
                            >
                                Entrar
                            </button>
                            <Linke to='/register'>Não tenho conta</Linke>
                        </Footer>
                    </form>
                </Form>
        </Container>
    );
}

export default Login;