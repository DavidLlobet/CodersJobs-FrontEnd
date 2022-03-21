import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import useUser from "../../hooks/useUser";
import "./MyProfilePage.scss";

const MyProfilePage = (): JSX.Element => {
  const { user, loadUser } = useUser();

  const tokenUser: any = localStorage.getItem("loggedUser");

  const userToken = JSON.parse(tokenUser);

  const { ownerToken } = userToken;
  const tokenDecode: any = jwtDecode(ownerToken);
  const idUser = tokenDecode.id;

  useEffect(() => {
    loadUser(idUser);
  }, [loadUser, idUser]);

  return (
    <>
      <div className="username">{user.user.name}</div>
    </>
  );
};

export default MyProfilePage;
