import { Component, OnInit } from '@angular/core';
import {WebTemplateModel} from "../../../../common/web-template.model";
import {FormService} from "../../../secretary/components/secretary-create-document-template/form.service";
import {Form, Formio} from "formiojs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-upload-document',
  templateUrl: './student-upload-document.component.html',
  styleUrls: ['./student-upload-document.component.css']
})
export class StudentUploadDocumentComponent implements OnInit {

  formSchema: any;
  selectedFormCode: string = '';

  constructor(private formService: FormService, private router: Router) { }

  ngOnInit(): void {

  }

  onDocumentTypeChange(selectedCode: string): void {
    if (selectedCode) {
      this.selectedFormCode = selectedCode;
      this.formService.getFormTemplateByCode(selectedCode).subscribe(template => {
        this.formSchema = JSON.parse(template.form?.data);
      });
    } else {
      this.formSchema = null;
    }
  }


  onSubmit(submission: any): void {
    this.formService.submitStudentSubmission(submission.data, this.selectedFormCode).subscribe(response => {
      this.router.navigate(['student/view-documents-completed']);
    });
  }
}
