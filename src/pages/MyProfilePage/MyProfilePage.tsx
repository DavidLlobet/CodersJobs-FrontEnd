import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import JobAppliedCard from "../../components/JobAppliedCard/JobAppliedCard";
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

  console.log(user);

  return (
    <>
      <div className="username">{user.user.name}</div>
      <h1>Mis candidaturas</h1>
      <ul className="list">
        <JobAppliedCard />
      </ul>
    </>
  );
};

export default MyProfilePage;
