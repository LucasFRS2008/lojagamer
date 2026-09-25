import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h1 className="logo">
                LOJA <span>GAMER</span>
            </h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/jogos">Jogos</Link>
                    </li>

                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>

                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
