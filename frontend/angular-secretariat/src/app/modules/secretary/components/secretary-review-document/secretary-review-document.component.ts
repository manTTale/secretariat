import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DocumentStatus, StudentSubmission} from "../../../../common/student-submission.model";
import {FormService} from "../secretary-create-document-template/form.service";
import {Router} from "@angular/router";
import {SecretaryService} from "../../../../services/secretary.service";

@Component({
  selector: 'app-secretary-review-document',
  templateUrl: './secretary-review-document.component.html',
  styleUrls: ['./secretary-review-document.component.css']
})
export class SecretaryReviewDocumentComponent implements OnInit {
  submissions$: Observable<StudentSubmission[]> | undefined;
  readonly DocumentStatus = DocumentStatus;

  constructor(private formService: FormService,
              private router: Router,
              private secretaryService: SecretaryService,) { }

  ngOnInit(): void {
    this.submissions$ = this.formService.getAllSubmissions();
  }

  openFormDetails(submission: StudentSubmission) {
    this.router.navigate(['/student/submission', submission.id]);
  }

  updateStatus(submission: StudentSubmission, newStatus: string) {
    this.secretaryService.updateDocumentStatus(submission.id!, newStatus).subscribe(updatedSubmission => {
      submission.documentStatus = updatedSubmission.documentStatus;
    }, error => {
      console.error('Error updating status', error);
    });
  }
}
