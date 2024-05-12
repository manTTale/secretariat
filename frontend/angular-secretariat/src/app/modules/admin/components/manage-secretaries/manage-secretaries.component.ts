import { Component, OnInit } from '@angular/core';
import {Secretary} from "../../../../common/secretary";
import {SecretaryService} from "../../../../services/secretary.service";

@Component({
  selector: 'app-manage-secretaries',
  templateUrl: './manage-secretaries.component.html',
  styleUrls: ['./manage-secretaries.component.css']
})
export class ManageSecretariesComponent implements OnInit {

  secretaries: Secretary[] = [];

  constructor(private secretaryService: SecretaryService) { }

  ngOnInit(): void {
    this.listSecretaries();
  }

  private listSecretaries() {
    this.secretaryService.getSecretaryList().subscribe(
      data => {
        this.secretaries = data;
      }
    )
  }

  deleteSecretary(id: any) {
    this.secretaryService.deleteSecretary(id).subscribe(
      (result)=>{
        this.ngOnInit();
      });
  }
}
