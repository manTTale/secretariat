import { Component, OnInit } from '@angular/core';
import {Student} from "../../../../common/student";
import {StudentService} from "../../../../services/student.service";

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {

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
