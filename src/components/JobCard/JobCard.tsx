import { IJob } from "../../interfaces/interfaces";

interface IJobProps {
  job: IJob;
}

const JobCard = ({ 
  job: {title}
}: IJobProps): JSX.Element => (
    <li className='jobcard'>
      <h4>{ title }</h4>
    </li>
  );

export default JobCard;