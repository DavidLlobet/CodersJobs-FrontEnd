import { IJob } from "../../interfaces/interfaces";

interface IJobProps {
  job: IJob;
}

const JobCard = ({ 
  job: {title}
}: IJobProps): JSX.Element => (
    <li className='jobcard'>
      <h1>{ title }</h1>
    </li>
  );

export default JobCard;