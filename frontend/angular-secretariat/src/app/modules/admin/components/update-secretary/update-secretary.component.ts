import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SecretaryService} from "../../../../services/secretary.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-secretary',
  templateUrl: './update-secretary.component.html',
  styleUrls: ['./update-secretary.component.css']
})
export class UpdateSecretaryComponent implements OnInit {

  updateSecretary = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl('')
  });

  message: boolean = false;

  constructor(private secretaryService:SecretaryService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.secretaryService.getSecretaryById(this.router.snapshot.params['id']).subscribe((result)=>{
      console.log(result);
      this.updateSecretary = new FormGroup({
        lastName: new FormControl(result['lastName']),
        firstName: new FormControl(result['firstName'])
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
