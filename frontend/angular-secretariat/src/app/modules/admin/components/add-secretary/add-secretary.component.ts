import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SecretaryService} from "../../../../services/secretary.service";

@Component({
  selector: 'app-add-secretary',
  templateUrl: './add-secretary.component.html',
  styleUrls: ['./add-secretary.component.css']
})
export class AddSecretaryComponent implements OnInit {

  addSecretary = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl('')
  });

  message: boolean = false;

  constructor(private secretaryService:SecretaryService) { }

  ngOnInit(): void {
  }

  SaveData() {
    this.secretaryService.saveSecretaryData(this.addSecretary.value).subscribe((result)=>{
      this.message = true;
      this.addSecretary.reset({});
    });
  }

  removeMessage() {
    this.message=false;
  }

}
