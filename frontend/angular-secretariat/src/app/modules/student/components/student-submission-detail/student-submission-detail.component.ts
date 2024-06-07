import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from "../../../secretary/components/secretary-create-document-template/form.service";
import { StudentSubmission } from "../../../../common/student-submission.model";
import { Formio } from "formiojs";

@Component({
  selector: 'app-student-submission-detail',
  templateUrl: './student-submission-detail.component.html',
  styleUrls: ['./student-submission-detail.component.css']
})
export class StudentSubmissionDetailComponent implements OnInit {
  submissionId: number | null = null;
  submission: StudentSubmission | null = null;
  formSchema: any;

  constructor(private route: ActivatedRoute, private formService: FormService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.submissionId = +id;
      this.loadSubmission();
    } else {
      console.error('No ID found in the route');
    }
  }

  loadSubmission(): void {
    if (this.submissionId !== null) {
      this.formService.getSubmissionById(this.submissionId).subscribe(submission => {
        this.submission = submission;
        if (submission.formCode) {
          this.loadFormTemplate(submission.formCode);
        } else {
          console.error('No form code found for the submission');
        }
      }, error => {
        console.error('Error loading submission:', error);
      });
    }
  }

  loadFormTemplate(formCode: string): void {
    this.formService.getFormTemplateByCode(formCode).subscribe(formTemplate => {
      if (formTemplate && formTemplate.form) {
        this.formSchema = JSON.parse(formTemplate.form.data);
        this.renderForm();
      } else {
        console.error('No form data found for the form code');
      }
    }, error => {
      console.error('Error loading form template:', error);
    });
  }

  renderForm(): void {
    if (this.formSchema) {
      Formio.createForm(document.getElementById('formio'), this.formSchema, { readOnly: true }).then(form => {
        if (this.submission) {
          form.submission = { data: JSON.parse(this.submission.submissionData || '{}') };
        }
      });
    }
  }

  submitForm(): void {
    const formElement = document.getElementById('formio') as any;
    if (formElement && formElement.formio) {
      formElement.formio.submit().then((submission: any) => {
        if (this.submission && this.submission.formCode) {
          this.formService.submitStudentSubmission(submission.data, this.submission.formCode).subscribe({
            next: (response) => {
              console.log('Form submitted successfully', response);
              // Navigate to another route if needed
            },
            error: (error) => {
              console.error('Error submitting form', error);
            }
          });
        }
      }).catch((error: any) => {
        console.error('Form validation failed', error);
      });
    }
  }
}
