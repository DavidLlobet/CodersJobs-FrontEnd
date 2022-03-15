import { useState, FormEvent, ChangeEvent } from "react";

const JobForm = (): JSX.Element => {
  interface Job {
    title: string;
    company: string;
    location: string;
    salary: number | string;
  }
  const initialJobDataForm: Job = {
    title: "",
    company: "",
    location: "",
    salary: "",
  };

  const [jobData, SetJobData] = useState(initialJobDataForm);

  const onSubmitData = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const actualJobData = {
      title: jobData.title,
      company: jobData.company,
      location: jobData.location,
      salary: jobData.salary,
    };

    SetJobData(actualJobData);
  };

  const onChangeJobData = (event: ChangeEvent<HTMLInputElement>) => {
    SetJobData({ ...jobData, [event.target.id]: event.target.value });
  };

  return (
    <div className="form-container">
      <form className="form-container__form-data text" onSubmit={onSubmitData}>
        <label htmlFor="title" className="label">
          Title
          <input
            type="text"
            className="text"
            value={jobData.title}
            placeholder="Position offered"
            id="title"
            onChange={onChangeJobData}
            required
          />
        </label>
        <label htmlFor="company" className="label">
          Organization
          <input
            type="text"
            className="text"
            value={jobData.company}
            placeholder="Your organization"
            id="company"
            onChange={onChangeJobData}
            required
          />
        </label>
        <label htmlFor="location" className="label">
          Location
          <input
            type="text"
            className="text"
            value={jobData.location}
            placeholder="Where are you?"
            id="location"
            onChange={onChangeJobData}
            required
          />
        </label>
        <label htmlFor="salary" className="label">
          Salary
          <input
            type="text"
            className="text"
            value={jobData.salary}
            placeholder="Salary"
            id="salary"
            onChange={onChangeJobData}
            required
          />
        </label>
        <input className="button" type="submit" value="Publish!" />
      </form>
    </div>
  );
};

export default JobForm;
