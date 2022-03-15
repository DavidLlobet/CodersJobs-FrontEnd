export interface IJob {
  title: string,
  company: string,
  companyAnchor: string,
  jobAnchor: string,
  description: string,
  contactPerson: string,
  salary: number,
  numberOfWorkers?: number,
  startup: boolean,
  location: string,
  desiredProfile: string,
  image?: string, 
  releaseDate: Date,
}


export interface IUser {
  name?: string,
  username: string,
  password: string,
  email?: string,
  jobsApplied?: Array<Object>,
  isAdmin: boolean,
}


export interface IAction {
  type: string,
}

export interface IGetJobsAction extends IAction {
  jobs: IJob[];
}


