import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Admin from 'pages/Admin';
import ProductDetails from 'pages/ProductDetails';


const Routes = () => (

  <BrowserRouter>

    <Navbar />

    <Switch>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/products" exact>
        <Catalog />
      </Route>

      <Redirect from="/admin" to="/admin/products" exact />
      
      <Route path="/admin" exact>
        <Admin />
      </Route>

      <Route path="/products/:productId">
        <ProductDetails />
      </Route>

      <Route path="*"> {/*verificar rota default 404*/}
          <p>Ops! A página não foi encontrada.</p>
          <p>Se o erro persistir, nos informe por favor: atendimentods@dscatalog.com.br</p>
          <p>Erro 404: O conteúdo não está mais disponível ou você digitou o endereço errado.</p>
      </Route>

    </Switch>

  </BrowserRouter>

);

export default Routes;
