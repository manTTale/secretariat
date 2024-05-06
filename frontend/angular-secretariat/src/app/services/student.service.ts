import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Student} from "../common/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/student/getAllStudents';

  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseUrl);
  }

}
