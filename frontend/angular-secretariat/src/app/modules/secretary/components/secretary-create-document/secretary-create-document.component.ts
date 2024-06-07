import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WebTemplateModel} from "../../../../common/web-template.model";
import {Router} from "@angular/router";
import {FormService} from "../secretary-create-document-template/form.service";

@Component({
  selector: 'app-secretary-create-document',
  templateUrl: './secretary-create-document.component.html',
  styleUrls: ['./secretary-create-document.component.css']
})
export class SecretaryCreateDocumentComponent implements OnInit {

  forms: WebTemplateModel[] = [];

  constructor(private http: HttpClient,
              private router: Router,
              private formService: FormService) {}

  ngOnInit() {
    this.fetchForms();
  }

  fetchForms() {
    this.formService.getForms().subscribe(forms => {
      this.forms = forms;
    });
  }

  openFormBuilder(form: WebTemplateModel) {
    this.router.navigate(['/secretary/edit-document-template', form.id]);
  }

  deleteForm(id: string) {
    this.formService.deleteFormTemplate(id).subscribe(_res => {
      this.fetchForms();
    });
  }
}
