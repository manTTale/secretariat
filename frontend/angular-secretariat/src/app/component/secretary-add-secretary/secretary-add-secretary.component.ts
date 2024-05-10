import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../../services/student.service";
import {SecretaryService} from "../../services/secretary.service";

@Component({
  selector: 'app-secretary-add-secretary',
  templateUrl: './secretary-add-secretary.component.html',
  styleUrls: ['./secretary-add-secretary.component.css']
})
export class SecretaryAddSecretaryComponent implements OnInit {

  addSecretary = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl('')
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
