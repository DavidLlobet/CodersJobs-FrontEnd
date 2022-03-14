import "./Header.css";

const Header = (): JSX.Element => {
    return (
        <nav className="header">
            <ul className="header__logotitle">
                <li className="header__logo list-item"> Logo </li>
                <li className="header__title list-item"> <p> CodersJobs </p></li>
            </ul>
            <ul className="header__list">
                <li className="list-item">Anadir Job</li>
                <li className="list-item">Login</li>
            </ul>
        </nav>
    )
};

export default Header;