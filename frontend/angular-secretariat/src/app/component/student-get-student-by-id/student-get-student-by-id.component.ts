import { Component, OnInit } from '@angular/core';
import {Student} from "../../common/student";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-get-student-by-id',
  templateUrl: './student-get-student-by-id.component.html',
  styleUrls: ['./student-get-student-by-id.component.css']
})
export class StudentGetStudentByIdComponent implements OnInit {
  student: Student = new Student(999, "mock","mock","mock","mock","mock");

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudentById();
  }

  public getStudentById() {
    this.studentService.getStudentById(this.student.id).subscribe(
      data => {
        this.student = data;
      }
    )
  }
}
