import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-update-student',
  templateUrl: './student-update-student.component.html',
  styleUrls: ['./student-update-student.component.css']
})
export class StudentUpdateStudentComponent implements OnInit {

  updateStudent = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    specialization: new FormControl(''),
    groupNumber: new FormControl(''),
    matriculationNumber: new FormControl('')
  });

  message: boolean = false;

  constructor(private studentService:StudentService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.studentService.getStudentById(this.router.snapshot.params['id']).subscribe((result)=>{
      console.log(result);
      this.updateStudent = new FormGroup({
        lastName: new FormControl(result['lastName']),
        firstName: new FormControl(result['firstName']),
        specialization: new FormControl(result['specialization']),
        groupNumber: new FormControl(result['groupNumber']),
        matriculationNumber: new FormControl(result['matriculationNumber'])
      });
    })
  }

  UpdateData() {
    this.studentService.updateStudentData(this.router.snapshot.params['id'], this.updateStudent.value)
      .subscribe((result)=>{
        console.log(result);
        this.message = true;
      })
  }

  removeMessage() {
    this.message=false;
  }
}
