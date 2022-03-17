import { useState, FormEvent, ChangeEvent } from "react";
import "./JobForm.scss";
import { useNavigate } from "react-router";
// import CurrencyInput from "react-currency-input-field";
import { IJob } from "../../interfaces/interfaces";
import useJobs from "../../hooks/useJobs";
import paths from "../../paths/paths";

const JobForm = (): JSX.Element => {
  const { createJob } = useJobs();

  const initialJobDataForm: IJob = {
    id: "",
    title: "",
    company: "",
    companyAnchor: "",
    jobAnchor: "",
    description: "",
    contactPerson: "",
    salary: undefined,
    numberOfWorkers: undefined,
    startup: false,
    location: "",
    desiredProfile: "",
    image: "",
    releaseDate: new Date(Date.now()),
  };

  const navigate = useNavigate();
  const [jobData, SetJobData] = useState(initialJobDataForm);

  const onSubmitData = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newJobData = {
      id: "",
      title: jobData.title,
      company: jobData.company,
      companyAnchor: jobData.companyAnchor,
      jobAnchor: jobData.jobAnchor,
      description: jobData.description,
      contactPerson: jobData.contactPerson,
      salary: jobData.salary,
      numberOfWorkers: jobData.numberOfWorkers,
      startup: jobData.startup,
      location: jobData.location,
      desiredProfile: jobData.desiredProfile,
      image: jobData.image,
      releaseDate: new Date(Date.now()),
    };

    createJob(newJobData);
    navigate(paths.getJobs);
  };

  const onChangeJobData = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    SetJobData({ ...jobData, [event.target.id]: event.target.value });
  };

  return (
    <div className="form-container">
      <form className="job-form" onSubmit={onSubmitData}>
        <div className="job-form__field">
          <label htmlFor="title" className="job-form__label">
            Título oferta
          </label>
          <input
            type="text"
            autoComplete="off"
            className="job-form__input"
            value={jobData.title}
            placeholder="Título de la posición abierta"
            id="title"
            onChange={onChangeJobData}
          />
        </div>
        <div className="job-form__field">
          <label htmlFor="company" className="job-form__label">
            Organización
          </label>
          <input
            type="text"
            autoComplete="off"
            className="job-form__input"
            value={jobData.company}
            placeholder="Nombre de tu organización"
            id="company"
            onChange={onChangeJobData}
          />
        </div>
        <div className="job-form__field">
          <label htmlFor="companyAnchor" className="job-form__label">
            Vuestra web
          </label>
          <input
            type="text"
            autoComplete="off"
            className="job-form__input"
            value={jobData.companyAnchor}
            placeholder="Enlace a la web de tu organización"
            id="companyAnchor"
            onChange={onChangeJobData}
          />
        </div>
        <div className="job-form__field">
          <label htmlFor="image" className="job-form__label">
            Logo
          </label>
          <input
            type="file"
            autoComplete="off"
            className="job-form__input"
            value={jobData.image}
            placeholder="Logo de tu organización (opcional)"
            id="image"
            onChange={onChangeJobData}
          />
        </div>
        <div className="job-form__field">
          <label htmlFor="location" className="job-form__label">
            Población
          </label>
          <input
            type="text"
            autoComplete="off"
            className="job-form__input"
            value={jobData.location}
            placeholder="Dónde estáis?"
            id="location"
            onChange={onChangeJobData}
          />
        </div>
        <div className="job-form__field">
          <label htmlFor="description" className="job-form__label">
            Descripción
          </label>
          <textarea
            className="job-form__input job-form__input--large "
            value={jobData.description}
            placeholder="Detalles del puesto"
            id="description"
            onChange={onChangeJobData}
          />
        </div>

        <div className="job-form__field">
          <label htmlFor="contactPerson" className="job-form__label">
            Contacto
          </label>
          <input
            type="text"
            autoComplete="off"
            className="job-form__input"
            value={jobData.contactPerson}
            placeholder="Persona de contacto (link)"
            id="contactPerson"
            onChange={onChangeJobData}
          />
        </div>

        <div className="job-form__field">
          <label htmlFor="numberOfWorkers" className="job-form__label">
            Número de trabajadores
          </label>
          <input
            type="number"
            autoComplete="off"
            className="job-form__input"
            value={jobData.numberOfWorkers}
            placeholder="Plantilla (opcional)"
            id="numberOfWorkers"
            onChange={onChangeJobData}
          />
        </div>
        <div className="job-form__field job-form__salary">
          <input
            type="checkbox"
            className="job-form__input2 job-form__checkbox"
            // value={jobData.startup}
            id="startup"
            onChange={onChangeJobData}
          />
          <label htmlFor="startup" className="job-form__label2">
            Sois una startup?
          </label>
        </div>

        <div className="job-form__field">
          <label htmlFor="desiredProfile" className="job-form__label">
            Perfil deseado
          </label>
          <textarea
            className="job-form__input job-form__input--large"
            value={jobData.desiredProfile}
            placeholder="Qué buscáis?"
            id="desiredProfile"
            onChange={onChangeJobData}
          />
        </div>
        <div className="job-form__field">
          <label htmlFor="salary" className="job-form__label">
            Salario
          </label>
          <div className="job-form__salary">
            <input
              type="number"
              autoComplete="off"
              className="job-form__input job-form__input--salary"
              value={jobData.salary}
              placeholder="Salario"
              id="salary"
              onChange={onChangeJobData}
            />
            <span className="job-form__salary__euro">€</span>
          </div>
        </div>
        <div className="job-form__field">
          <label htmlFor="jobAnchor" className="job-form__label">
            Enlace
          </label>
          <input
            type="text"
            autoComplete="off"
            className="job-form__input"
            value={jobData.jobAnchor}
            placeholder="Link a vuestra oferta"
            id="jobAnchor"
            onChange={onChangeJobData}
          />
        </div>
        <div className="job-form__field">
          <input className="job-form__button" type="submit" value="Publicar!" />
        </div>
      </form>
    </div>
  );
};

export default JobForm;
