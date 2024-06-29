import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { WebTemplateModel } from '../../../../common/web-template.model';
import {Form} from "formiojs";
import {StudentSubmission} from "../../../../common/student-submission.model";

@Injectable({
  providedIn: 'root',
})
export class FormService {

  // #CHANGE FOR AWS
  private baseUrl = 'http://feaa.us-east-1.elasticbeanstalk.com/api/forms';
  private submissionUrl = 'http://feaa.us-east-1.elasticbeanstalk.com/api/submissions';

  // private baseUrl = 'http://localhost:8080/api/forms';
  // private submissionUrl = 'http://localhost:8080/api/submissions';

  constructor(private http: HttpClient) {}

  getForms(): Observable<WebTemplateModel[]> {
    return this.http.get<WebTemplateModel[]>(this.baseUrl);
  }

  getFormById(id: string): Observable<WebTemplateModel> {
    return this.http.get<WebTemplateModel>(`${this.baseUrl}/${id}`);
  }

  saveFormTemplate(formTemplate: WebTemplateModel): Observable<HttpResponse<WebTemplateModel>> {
    return this.http.post<WebTemplateModel>(this.baseUrl, formTemplate, { observe: 'response' });
  }

  deleteFormTemplate(id: string): Observable<WebTemplateModel> {
    return this.http.delete<WebTemplateModel>(`${this.baseUrl}/${id}`);
  }

  submitForm(form: Form): Observable<Form> {
    return this.http.post<Form>(`${this.baseUrl}/submit`, form);
  }

  getFormTemplateByCode(code: string): Observable<WebTemplateModel> {
    return this.http.get<WebTemplateModel>(`${this.baseUrl}/code/${code}`);
  }

  submitStudentSubmission(submission: any, formCode: string): Observable<any> {
    return this.http.post<any>(this.submissionUrl, { submissionData: JSON.stringify(submission), formCode });
  }

  getAllSubmissions(): Observable<StudentSubmission[]> {
    return this.http.get<StudentSubmission[]>(this.submissionUrl).pipe(
      map(response => response || [])
    );
  }

  getSubmissionById(id: number): Observable<StudentSubmission> {
    return this.http.get<StudentSubmission>(`${this.submissionUrl}/${id}`);
  }
}
