import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../../../../services/student.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  updateStudent = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    specialization: new FormControl(''),
    groupNumber: new FormControl(''),
    matriculationNumber: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl('')
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
        matriculationNumber: new FormControl(result['matriculationNumber']),
        userName: new FormControl(result['userName']),
        password: new FormControl(result['password'])
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
