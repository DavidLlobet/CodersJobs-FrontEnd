import JobForm from "../../components/JobForm/JobForm";
import "./JobFormPage.scss";

const JobFormPage = (): JSX.Element => (
  <>
    <h1 className="title">Añadir Job</h1>
    <JobForm />
  </>
);

export default JobFormPage;
