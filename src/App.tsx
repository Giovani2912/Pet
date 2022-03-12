import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './screens/Home';
import Register from './screens/Register/index';
import Login from './screens/Login';
import About from './screens/About';
import Main from './screens/Main';
import ProductRegister from './screens/ProductRegister';
import ProductList from './screens/ProductList';
import InsumosRegister from './screens/InsumosRegister';
import VehiclesRegister from './screens/VehiclesRegister';
import WaterControl from './screens/WaterControl';




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
          <Route path="/register-product" component={ProductRegister} />
          <Route path="/register-insumos" component={InsumosRegister} />
          <Route path="/register-vehicles" component={VehiclesRegister} />
          <Route path="/water-control" component={WaterControl} />
          <Route path="/list-product" component={ProductList} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </div>
  );
}

export default App;
