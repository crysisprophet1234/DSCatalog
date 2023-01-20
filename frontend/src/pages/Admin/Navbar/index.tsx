import './Navbar.css';

const Navbar = () => {

    return (

        <nav className="admin-nav-container">

            <ul>

                <li>
                    <a href='link' className='admin-nav-item active'>Produtos</a>
                </li>

                <li>
                    <a href='link' className='admin-nav-item'>Categorias</a>
                </li>

                <li>
                    <a href='link' className='admin-nav-item'>Usuários</a>
                </li>

            </ul>

        </nav>

    )

}

export default Navbar;