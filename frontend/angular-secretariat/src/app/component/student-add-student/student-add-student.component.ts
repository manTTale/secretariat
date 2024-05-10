import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-add-student',
  templateUrl: './student-add-student.component.html',
  styleUrls: ['./student-add-student.component.css']
})
export class StudentAddStudentComponent implements OnInit {

  addStudent = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    specialization: new FormControl(''),
    groupNumber: new FormControl(''),
    matriculationNumber: new FormControl('')
  });

  message: boolean = false;

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
  }

  SaveData() {
    this.studentService.saveStudentData(this.addStudent.value).subscribe((result)=>{
      this.message = true;
      this.addStudent.reset({});
    });
  }

  removeMessage() {
    this.message=false;
  }
}
