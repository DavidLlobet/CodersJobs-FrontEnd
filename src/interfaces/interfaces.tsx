export interface IJob {
  id: string;
  title: string;
  company: string;
  companyAnchor: string;
  jobAnchor: string;
  description: string;
  contactPerson: string;
  salary: number | undefined;
  numberOfWorkers?: number | undefined;
  startup: boolean;
  location: string;
  desiredProfile: string;
  image?: string;
  owner: string;
}

export interface IUser {
  name?: string;
  userName: string;
  password: string;
  email?: string;
  jobsApplied?: Array<Object>;
  isAdmin: boolean;
}

export interface IUserRegistered extends IUser {
  isAuthenticated: boolean;
}

export interface IAction {
  type: string;
}

export interface IGetJobsAction extends IAction {
  jobs: IJob[];
}

export interface IRegisterUserAction extends IAction {
  user: IUser;
}
