import {Component, OnInit} from "@angular/core";
import {Form} from "../../../../common/form.model";
import {WebTemplateModel} from "../../../../common/web-template.model";
import {FormService} from "./form.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-secretary-create-document-template',
  templateUrl: './secretary-create-document-template.component.html',
  styleUrls: ['../secretary-create-document/secretary-create-document.component.css']
})
export class SecretaryCreateDocumentTemplateComponent implements OnInit {
  formTemplate: WebTemplateModel = new WebTemplateModel();
  form: Form = new Form(null, []);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formService: FormService
  ) {}


  ngOnInit(): void {
    const formId = this.route.snapshot.paramMap.get('id');
    if (formId) {
      this.formService.getFormById(formId).subscribe(formTemplate => {
        this.formTemplate = formTemplate;
        this.form = JSON.parse(this.formTemplate.form?.data);
      });
    } else {
      this.formTemplate.form = this.form;
    }
  }

  saveFormTemplate() {
    this.formTemplate.form!.data = JSON.stringify(this.form);  // Serialize the form data
    this.formService.saveFormTemplate(this.formTemplate).subscribe({
      next: (response) => {
        console.log('Form template saved successfully', response);
        this.router.navigate(['/secretary/create-document']); // Navigate back to the list or home
      },
      error: (error) => {
        console.error('Error saving form template', error);
      }
    });
  }
}
