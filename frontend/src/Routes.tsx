import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
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

      <Route path="/admin">
        <Admin />
      </Route>

      <Route path="/products/:productId">
        <ProductDetails />
      </Route>

    </Switch>

  </BrowserRouter>

);

export default Routes;
