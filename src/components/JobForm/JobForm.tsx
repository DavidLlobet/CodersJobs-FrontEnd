import { useState, FormEvent, ChangeEvent } from "react";
import "./JobForm.scss";
import { IJob } from "../../interfaces/interfaces";

const JobForm = (): JSX.Element => {
  const initialJobDataForm: IJob = {
    title: "",
    company: "",
    companyAnchor: "",
    jobAnchor: "",
    description: "",
    contactPerson: "",
    salary: 0,
    numberOfWorkers: 0,
    startup: false,
    location: "",
    desiredProfile: "",
    image: "",
    releaseDate: new Date(Date.now()),
  };

  const [jobData, SetJobData] = useState(initialJobDataForm);

  const onSubmitData = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const actualJobData = {
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
            Título oferta
          </label>
          <input
            type="text"
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
            className="job-form__input"
            value={jobData.company}
            placeholder="Nombre de tu organización"
            id="company"
            onChange={onChangeJobData}
          />
        </div>
        <div className="job-form__field">
          <label htmlFor="company-anchor" className="job-form__label">
            Vuestra web
          </label>
          <input
            type="text"
            className="job-form__input"
            value={jobData.companyAnchor}
            placeholder="Enlace a la web de tu organización"
            id="company-anchor"
            onChange={onChangeJobData}
          />
        </div>
        <div className="job-form__field">
          <label htmlFor="image" className="job-form__label">
            Logo
          </label>
          <input
            type="text"
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
          <input
            type="text"
            className="job-form__input"
            value={jobData.description}
            placeholder="Detalles del puesto"
            id="description"
            onChange={onChangeJobData}
          />
        </div>

        <div className="job-form__field">
          <label htmlFor="contact" className="job-form__label">
            Contacto
          </label>
          <input
            type="text"
            className="job-form__input"
            value={jobData.contactPerson}
            placeholder="Persona de contacto (link)"
            id="contact"
            onChange={onChangeJobData}
          />
        </div>

        <div className="job-form__field">
          <label htmlFor="workers" className="job-form__label">
            Número de trabajadores
          </label>
          <input
            type="text"
            className="job-form__input"
            value={jobData.numberOfWorkers}
            placeholder="Plantilla (opcional)"
            id="workers"
            onChange={onChangeJobData}
          />
        </div>
        <div className="job-form__field">
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
          <label htmlFor="desired-profile" className="job-form__label">
            Perfil deseado
          </label>
          <input
            type="text"
            className="job-form__input"
            value={jobData.desiredProfile}
            placeholder="Qué buscáis?"
            id="desired-profile"
            onChange={onChangeJobData}
          />
        </div>
        <div className="job-form__field">
          <label htmlFor="salary" className="job-form__label">
            Salario
          </label>
          <input
            type="text"
            className="job-form__input"
            value={jobData.salary}
            placeholder="Salario"
            id="salary"
            onChange={onChangeJobData}
          />
        </div>
        <div className="job-form__field">
          <label htmlFor="job-anchor" className="job-form__label">
            Enlace
          </label>
          <input
            type="text"
            className="job-form__input"
            value={jobData.jobAnchor}
            placeholder="Link a vuestra oferta"
            id="job-anchor"
            onChange={onChangeJobData}
          />
        </div>
        <input className="job-form__button" type="submit" value="Publicar!" />
      </form>
    </div>
  );
};

export default JobForm;
