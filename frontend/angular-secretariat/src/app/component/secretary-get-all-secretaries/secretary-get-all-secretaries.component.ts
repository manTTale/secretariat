import { Component, OnInit } from '@angular/core';
import {Secretary} from "../../common/secretary";
import {SecretaryService} from "../../services/secretary.service";

@Component({
  selector: 'app-secretary-get-all-secretaries',
  templateUrl: './secretary-get-all-secretaries.component.html',
  styleUrls: ['./secretary-get-all-secretaries.component.css']
})
export class SecretaryGetAllSecretariesComponent implements OnInit {

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
