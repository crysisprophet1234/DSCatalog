import Navbar from "./Navbar";
import './Admin.css';
import { Route, Switch } from "react-router-dom";

const Admin = () => {

  return (

    <div className="admin-container">

      <Navbar />

      <div className="admin-content">

        <Switch>

          <Route path="/admin/products">
            <h1>CRUD product</h1>
          </Route>

          <Route path="/admin/categories">
            <h1>CRUD categories</h1>
          </Route>

          <Route path="/admin/users">
            <h1>CRUD users</h1>
          </Route>

        </Switch>

      </div>

    </div>

  )

}

export default Admin;
