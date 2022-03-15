import { useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  const loginClick = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="header__title">
        <p className="header__title1">Coders</p>
        <p className="header__title2">Jobs</p>
      </div>
      <button className="header__login" onClick={loginClick}>
        Entra
      </button>
    </div>
  );
};

export default Header;
