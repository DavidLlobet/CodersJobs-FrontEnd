import { useState, FormEvent, ChangeEvent } from "react";
import "./JobForm.scss";

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
      <form className="job-form" onSubmit={onSubmitData}>
        <div className="job-form__field">
          <label htmlFor="title" className="job-form__label">
            Title
          </label>
          <input
            type="text"
            className="job-form__input"
            value={jobData.title}
            placeholder="Título de la posición abierta"
            id="title"
            onChange={onChangeJobData}
            required
          />
        </div>
        <label htmlFor="company" className="job-form__label">
          Organization
          <input
            type="text"
            className="job-form__input"
            value={jobData.company}
            placeholder="Nombre de tu organización"
            id="company"
            onChange={onChangeJobData}
            required
          />
        </label>
        <label htmlFor="location" className="job-form__label">
          Location
          <input
            type="text"
            className="job-form__input"
            value={jobData.location}
            placeholder="Dónde estáis?"
            id="location"
            onChange={onChangeJobData}
            required
          />
        </label>
        <label htmlFor="salary" className="job-form__label">
          Salary
          <input
            type="text"
            className="job-form__input"
            value={jobData.salary}
            placeholder="Salario"
            id="salary"
            onChange={onChangeJobData}
            required
          />
        </label>
        <input className="job-form__button" type="submit" value="Publish!" />
      </form>
    </div>
  );
};

export default JobForm;
