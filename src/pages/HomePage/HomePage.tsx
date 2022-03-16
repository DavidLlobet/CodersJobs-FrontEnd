import { useEffect, useState} from "react";
import JobCard from "../../components/JobCard/JobCard";

import useJobs from "../../hooks/useJobs";
import { IJob } from "../../interfaces/interfaces";


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
  if (searchInput.length > 0 ) {
    filteredJobs = jobs.filter ( job => job.title.toLowerCase().includes(searchInput.toLowerCase()) );
  } else {
    filteredJobs = jobs;
  }


  return (
    <>
      <div className="homepage"> 
        <div className="searchbox"> 
          <input
            className="searchbox"
            type="text"
            autoFocus={true}
            id="searchrobot"
            value={searchInput}
            onChange={handleChange}
            placeholder="search robot"
          ></input>
        </div> 
        <ul className="listado">
          {filteredJobs && filteredJobs.length 
            ? filteredJobs.map( (job) => <JobCard key={job.id} job={job} /> )
            : "The data is loading"  
          }
        </ul>
      </div>
    </>
  )};

export default HomePage;