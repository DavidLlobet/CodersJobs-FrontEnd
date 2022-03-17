import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = (): JSX.Element => {
  let isAuthenticated;

  const tokenUser = localStorage.getItem("loggedUser");

  if (tokenUser) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }

  const navigate = useNavigate();

  const { pathname } = window.location;

  const homeClick = () => {
    navigate("/");
  };

  const loginClick = () => {
    navigate("/login");
  };

  return (
    <div className="header" title="header">
      <div className="header__title" onClick={homeClick}>
        <p className="header__title1">Coders</p>
        <p className="header__title2">Jobs</p>
      </div>
      {pathname !== "/login" ? (
        <button className="header__login" onClick={loginClick}>
          <FontAwesomeIcon icon={faUser} />
        </button>
      ) : (
        ""
      )}
      {isAuthenticated === true ? (
        <button className="header__logout">
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
