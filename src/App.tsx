import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './screens/Home';
import Register from './screens/Register/index';
import Login from './screens/Login';
import About from './screens/About';
import Main from './screens/Main';
import InsumosRegister from './screens/ListDogs';
import VehiclesRegister from './screens/DogsRegister';




import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/main" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/list-dogs" component={InsumosRegister} />
          <Route path="/register-dogs" component={VehiclesRegister} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </div>
  );
}

export default App;
