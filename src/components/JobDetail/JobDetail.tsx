import { useEffect } from 'react';
import { useParams } from 'react-router'; 

import useJob from '../../hooks/useJob';
import './JobDetail.scss';

const JobDetail = ():JSX.Element => {
  const params = useParams();
  const {id} = params;
  const {job, loadJob} = useJob();

  useEffect( () => {
    loadJob(id);
  }, [loadJob, id]);

  return (
    <div className="detail">
      <div className='detail-header'> 
        <p className='detail-job-title'> {job.title} </p>
        <p> {job.company} - {job.location} </p> 
        <p> {job.numberOfWorkers} employees </p>
      </div>
      <div className='detail-info'> 
        <div className='detail-description'> 
          <span> Descripcion </span>
          {job.description} 
        </div> 
        <div> {job.desiredProfile} </div>
        <div> {job.contactPerson} </div>  
      </div>
    </div>
)};

export default JobDetail;