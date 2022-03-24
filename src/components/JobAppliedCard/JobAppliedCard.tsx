import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./JobAppliedCard.scss";

const JobAppliedCard = ({ job }: any): JSX.Element => {
  console.log(job);
  return (
    <div className="card">
      <div className="card__column1">
        <div className="card__column1-icon">
          <p className="card__column1-icon-text">Front End Developer</p>
          <button className="card__column1-icon-button">
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
        <p className="card__column1-no-icon">Last.app</p>
      </div>
      <div className="card__column2">
        <p className="card__column2-text">Estado: Prueba técnica</p>
        <button className="card__column2-button">
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </div>
    </div>
  );
};

export default JobAppliedCard;
