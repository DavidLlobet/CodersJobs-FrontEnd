import "./Header.css";

const Header = (): JSX.Element => (
        <nav className="header navbar navbar-default">
          <div className="container-fluid">
            <ul className="header__logotitle navbar-left">
                <li className="header__logo list-item">  </li>
                <li className="header__title list-item"> <p> CodersJobs </p></li>
            </ul>
            <ul className="header__list navbar-right">
                <li className="list-item">Anadir Job</li>
                <li className="list-item">Login</li>
            </ul>
            </div>
        </nav>
    );

export default Header;