import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Secretary} from "../common/secretary";
import {StudentSubmission} from "../common/student-submission.model";

@Injectable({
  providedIn: 'root'
})
export class SecretaryService {
  // private baseUrl = 'http://localhost:8080/secretary';
  private baseUrl = 'http://feaa.us-east-1.elasticbeanstalk.com/secretary';
  private addSecretarySuffix = '/addSecretary';
  private getSecretaryByIdSuffix = '/getSecretaryById';
  private getAllSecretariesSuffix = '/getAllSecretaries';
  private updateSecretarySuffix = '/updateSecretary';
  private deleteSecretaryByIdSuffix = '/deleteSecretaryById';


  constructor(private httpClient: HttpClient) { }

  getSecretaryList(): Observable<Secretary[]> {
    const calledUrl = this.baseUrl + this.getAllSecretariesSuffix;
    return this.httpClient.get<Secretary[]>(calledUrl);
  }

  getSecretaryById(id: number): Observable<Secretary> {
    const calledUrl = this.baseUrl + this.getSecretaryByIdSuffix + "/" + id;
    return this.httpClient.get<Secretary>(calledUrl);
  }

  saveSecretaryData(data: any) {
    const calledUrl = this.baseUrl + this.addSecretarySuffix;
    return this.httpClient.post<Secretary>(calledUrl, data);
  }

  deleteSecretary(id: any) {
    const calledUrl = this.baseUrl + this.deleteSecretaryByIdSuffix + "/" + id;
    return this.httpClient.delete(calledUrl, {responseType: 'text'});
  }

  updateSecretaryData(id: any, data: any) {
    const calledUrl = this.baseUrl + this.updateSecretarySuffix;
    data.id = id;
    return this.httpClient.put(calledUrl, data);
  }

  updateDocumentStatus(submissionId: number, newStatus: string): Observable<StudentSubmission> {
    return this.httpClient.put<StudentSubmission>(`${this.baseUrl}/update-status/${submissionId}`, null, {
      params: { status: newStatus }
    });
  }
}
