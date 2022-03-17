import { useEffect, useState} from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import JobCard from "../../components/JobCard/JobCard";
import useJobs from "../../hooks/useJobs";
import './HomePage.scss';


const HomePage = (): JSX.Element => {

  const { jobs, getJobs} = useJobs();
  const [ searchInput, setSearchInput ] = useState('');
  const [ applyFilter, setApplyFilter ] = useState(false);

  const handleChange = (event: any) => {
    setSearchInput(event.target.value);    
  };
  
  const handleOnKeyDown = () => {
    setApplyFilter(false);
  };

  useEffect(()=>{
    getJobs();
  }, [getJobs]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setApplyFilter(true);
  };

  return (
    <>
      <div className="homepage"> 
        <form className="searchbox center" onSubmit={handleSubmit}> 
          <input
            className="search-input search-item"
            type="text"
            id="searchjob"
            value={searchInput}
            onChange={handleChange}
            onKeyDown={handleOnKeyDown}
            placeholder="Titulo trabajo"
          ></input>
          <button type='submit' className="search-button search-item"> 
            <FontAwesomeIcon icon={faSearch} /> 
            Buscar 
          </button>
        </form> 
        <ul className="listado center">
          {applyFilter?
          jobs.filter ( job => job.title.toLowerCase().includes(searchInput.toLowerCase()))
          .map( (job) => <JobCard key={job.id} job={job} /> )
          : jobs.map( (job) => <JobCard key={job.id} job={job} /> )
          }
        </ul>
      </div>
    </>
  )};

export default HomePage;