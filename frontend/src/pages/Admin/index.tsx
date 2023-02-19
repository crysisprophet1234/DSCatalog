import Navbar from "./Navbar";
import './Admin.css';
import { Route, Switch } from "react-router-dom";
import Users from "./Users";

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
            <Users />
          </Route>

        </Switch>

      </div>

    </div>

  )

}

export default Admin;
