import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Student} from "../common/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // private baseUrl = 'http://localhost:8080/student';
  private baseUrl = 'http://feaa.us-east-1.elasticbeanstalk.com/student';
  private addStudentSuffix = '/addStudent';
  private addStudentsSuffix = '/addStudents';
  private getStudentByIdSuffix = '/getStudentById';
  private getAllStudentsSuffix = '/getAllStudents';
  private updateStudentSuffix = '/updateStudent';
  private deleteStudentByIdSuffix = '/deleteStudentById';


  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]> {
    const calledUrl = this.baseUrl + this.getAllStudentsSuffix;
    return this.httpClient.get<Student[]>(calledUrl);
  }

  getStudentById(id: number): Observable<Student> {
    const calledUrl = this.baseUrl + this.getStudentByIdSuffix + "/" + id;
    return this.httpClient.get<Student>(calledUrl);
  }

  saveStudentData(data: any) {
    const calledUrl = this.baseUrl + this.addStudentSuffix;
    return this.httpClient.post<Student>(calledUrl, data);
  }

  deleteStudent(id: any) {
    const calledUrl = this.baseUrl + this.deleteStudentByIdSuffix + "/" + id;
    return this.httpClient.delete(calledUrl, {responseType: 'text'});
  }

  updateStudentData(id: any, data: any) {
    const calledUrl = this.baseUrl + this.updateStudentSuffix;
    data.id = id;
    return this.httpClient.put(calledUrl, data);
  }

}
