import { IJob } from "../../interfaces/interfaces";
import './JobCard.scss';

interface IJobProps {
  job: IJob;
}

const JobCard = ({ 
  job: {title, company, location}
}: IJobProps): JSX.Element => (
    <li className='job-item'>
      <div className="job-card">
        <div className="company-logo"></div>
        <div className="job-info">
          <h4>{ title } </h4>
          <p> { company } </p>
          <p> { location } </p>
        </div>
      </div>
    </li>
  );

export default JobCard;