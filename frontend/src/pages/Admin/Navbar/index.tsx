import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    return (

        <nav className="admin-nav-container">

            <ul>

                <li>
                    <NavLink to='/admin/products' className='admin-nav-item'>Produtos</NavLink>
                </li>

                <li>
                    <NavLink to='/admin/categories' className='admin-nav-item'>Categorias</NavLink>
                </li>

                <li>
                    <NavLink to='/admin/users' className='admin-nav-item'>Usuários</NavLink>
                </li>

            </ul>

        </nav>

    )

}

export default Navbar;