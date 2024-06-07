import {Student} from "./student";

export class StudentSubmission {
  constructor(
    public id?: number,
    public submissionData?: string,
    public formCode?: string,
    public student?: Student,
    public documentStatus?: DocumentStatus
  ) {}
}

export enum DocumentStatus {
  DEPUS = 'DEPUS',
  APROBAT = 'APROBAT'
}
