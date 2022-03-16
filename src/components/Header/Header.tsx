import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  const { pathname } = window.location;

  const homeClick = () => {
    navigate("/");
  };

  const loginClick = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="header__title" onClick={homeClick}>
        <p className="header__title1">Coders</p>
        <p className="header__title2">Jobs</p>
      </div>
      {pathname !== "/login" ? (
        <button className="header__login" onClick={loginClick}>
          Entra
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
