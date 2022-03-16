import { useEffect} from "react";
import JobCard from "../../components/JobCard/JobCard";

import useJobs from "../../hooks/useJobs";


const HomePage = (): JSX.Element => {

  const { jobs, getJobs} = useJobs();
  // const { searchInput } = useSearch();
  
  useEffect(()=>{
    getJobs()
  }, [getJobs]);

  return (
    <>
      <div className="homepage"> 
        <div className="searchbox"> Search Box </div> 
        <ul className="listado">
          {jobs && jobs.length 
            ? jobs.map( (job) => <JobCard key={job.id} job={job} /> )
            : "The data is loading"  
          }
        </ul>
      </div>
    </>
  )};

export default HomePage;