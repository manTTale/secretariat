import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../../../../services/student.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudent = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    specialization: new FormControl(''),
    groupNumber: new FormControl(''),
    matriculationNumber: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl('')
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
