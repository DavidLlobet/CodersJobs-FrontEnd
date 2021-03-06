import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import useJob from "../../hooks/useJob";
import useUser from "../../hooks/useUser";
import "./JobDetail.scss";

const JobDetail = (): JSX.Element => {
  const params = useParams();
  const { id } = params;
  const { job, loadJob } = useJob();
  const { user, applyJob } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    loadJob(id);
  }, [loadJob, id]);

  const tokenUser: any = localStorage.getItem("loggedUser");

  let idUser: string = "";
  if (tokenUser) {
    const userToken = JSON.parse(tokenUser);

    const { ownerToken } = userToken;
    const tokenDecode: any = jwtDecode(ownerToken);
    idUser = tokenDecode.id;
  }

  const onSubmit = (event: any) => {
    event.preventDefault();
    const newUser = {
      name: user.user.name,
      email: user.user.email,
      userName: user.user.userName,
      password: user.user.password,
      jobsApplied: [
        ...user.user.jobsApplied,
        { jobId: job.id, status: "Inscrito" },
      ],
      isAdmin: false,
    };
    applyJob(idUser, newUser);
  };

  const loginClick = () => {
    navigate("/login");
  };

  return (
    <div className="detail">
      <div className="detail-header">
        <div className="job-summary">
          <p className="detail-job-title"> {job.title} </p>
          <p>
            {" "}
            {job.company} - {job.location}{" "}
          </p>
          <p className="detail-number-employees">
            {" "}
            {job.numberOfWorkers} employees{" "}
          </p>
        </div>
        {tokenUser !== null ? (
          <button type="submit" className="job-application" onClick={onSubmit}>
            {" "}
            Inscribirse{" "}
          </button>
        ) : (
          <button className="job-application" onClick={loginClick}>
            Login/Register
          </button>
        )}
      </div>
      <ul className="detail-info">
        <li className="detail-item">
          <span className="detail-item-title"> Descripci??n </span>
          {job.description}
        </li>
        <li className="detail-item">
          <span className="detail-item-title"> Perfil buscado </span>
          {job.desiredProfile}
        </li>
        <li className="detail-item">
          <span className="detail-item-title"> Qu?? ofrecemos </span>
          {job.salary}
        </li>
        <li className="detail-item">
          <span className="detail-item-title"> Contacto persona </span>
          {job.contactPerson}
        </li>
      </ul>
    </div>
  );
};

export default JobDetail;
