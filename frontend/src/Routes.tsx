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
