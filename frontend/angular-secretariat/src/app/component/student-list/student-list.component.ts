import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Student} from "../../common/student";
import {resolve} from "@angular/compiler-cli";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.listStudents();
  }

  private listStudents() {
    this.studentService.getStudentList().subscribe(
      data => {
        this.students = data;
      }
    )
  }

  deleteStudent(id: any) {
    this.studentService.deleteStudent(id).subscribe(
    (result)=>{
      this.ngOnInit();
    });
  }
}
