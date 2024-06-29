import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../../services/student.service";
import {ActivatedRoute} from "@angular/router";
import {SecretaryService} from "../../services/secretary.service";

@Component({
  selector: 'app-secretary-update-secretary',
  templateUrl: './secretary-update-secretary.component.html',
  styleUrls: ['./secretary-update-secretary.component.css']
})
export class SecretaryUpdateSecretaryComponent implements OnInit {

  updateSecretary = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl('')
  });

  message: boolean = false;

  constructor(private secretaryService:SecretaryService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.secretaryService.getSecretaryById(this.router.snapshot.params['id']).subscribe((result)=>{
      console.log(result);
      this.updateSecretary = new FormGroup({
        lastName: new FormControl(result['lastName']),
        firstName: new FormControl(result['firstName']),
        userName: new FormControl(result['userName']),
        password: new FormControl(result['password'])
      });
    })
  }

  UpdateData() {
    this.secretaryService.updateSecretaryData(this.router.snapshot.params['id'], this.updateSecretary.value)
      .subscribe((result)=>{
        console.log(result);
        this.message = true;
      })
  }

  removeMessage() {
    this.message=false;
  }

}
