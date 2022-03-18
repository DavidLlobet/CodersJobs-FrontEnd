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
        <div className='job-summary'>
          <p className='detail-job-title'> {job.title} </p>
          <p> {job.company} - {job.location} </p> 
          <p className='detail-number-employees'> {job.numberOfWorkers} employees </p>
        </div>
        <button className='job-application'> Inscribirse </button>
      </div>
      <ul className='detail-info'> 
        <li className='detail-item'> 
          <span className='detail-item-title'> Descripcion </span>
          {job.description} 
        </li> 
        <li className='detail-item'> 
          <span className='detail-item-title'> Perfil buscado </span>
          {job.desiredProfile} 
        </li>
        <li className='detail-item'> 
          <span className='detail-item-title'> Que ofrecemos </span>
          {job.salary} 
        </li>
        <li className='detail-item'>
          <span className='detail-item-title'> Contacto persona </span> 
          {job.contactPerson} 
        </li>  
      </ul>
    </div>
)};

export default JobDetail;