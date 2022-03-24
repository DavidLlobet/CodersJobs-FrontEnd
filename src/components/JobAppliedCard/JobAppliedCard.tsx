import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

import useJob from "../../hooks/useJob";
import "./JobAppliedCard.scss";

const JobAppliedCard = ({jobApplied:{jobId, status}}:any): JSX.Element => {

  const {job, loadJob} =useJob();

  useEffect(()=>{
    loadJob(jobId);
  },[loadJob, jobId]);

  return (
  <div className="card">
    <div className="card__column1">
      <div className="card__column1-icon">
        <p className="card__column1-icon-text">{job.title}</p>
        <button className="card__column1-icon-button">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
      <p className="card__column1-no-icon">{job.company}</p>
    </div>
    <div className="card__column2">
      <p className="card__column2-text">Estado: {status}</p>
      <button className="card__column2-button">
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
    </div>
  </div>
)};

export default JobAppliedCard;
