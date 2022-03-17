import { useEffect, useState} from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import JobCard from "../../components/JobCard/JobCard";
import useJobs from "../../hooks/useJobs";
import { IJob } from "../../interfaces/interfaces";
import './HomePage.scss';


const HomePage = (): JSX.Element => {

  const { jobs, getJobs} = useJobs();
  const [ searchInput, setSearchInput ] = useState('');

  const handleChange = (event: any) => {
    setSearchInput(event.target.value);
  };
  
  useEffect(()=>{
    getJobs()
  }, [getJobs]);


  let filteredJobs: IJob[];
  let filter = false;
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    filter = true;
  };

  if (filter) {
    filteredJobs = jobs.filter ( job => job.title.toLowerCase().includes(searchInput.toLowerCase()) );
  } else {
    filteredJobs = jobs;
  }


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
            placeholder="Titulo trabajo"
          ></input>
          <button type='submit' className="search-button search-item"> 
            <FontAwesomeIcon icon={faSearch} /> 
            Buscar 
          </button>
        </form> 
        <ul className="listado center">
          {filteredJobs.map( (job) => <JobCard key={job.id} job={job} /> )
          }
        </ul>
      </div>
    </>
  )};

export default HomePage;