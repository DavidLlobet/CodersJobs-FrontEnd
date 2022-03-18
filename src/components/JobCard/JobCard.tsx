import { IJob } from "../../interfaces/interfaces";
import './JobCard.scss';

interface IJobProps {
  job: IJob,
  actionOnClick: any,
}

const JobCard = ({ 
  job: {title,company,location,image},
  actionOnClick,
}: IJobProps): JSX.Element => (
    <li className='job-item' onClick={actionOnClick}>
      <div className="job-card">
        <div className="company-logo"> <img alt="companylogo" src={image} width="50" height="50" /> </div>
        <div className="job-info">
          <div className="job-details">
            <p className="job-title">{ title } </p>
            <p> { company } </p>
          </div>
          <p> { location } </p>
        </div>
      </div>
    </li>
  );

export default JobCard;