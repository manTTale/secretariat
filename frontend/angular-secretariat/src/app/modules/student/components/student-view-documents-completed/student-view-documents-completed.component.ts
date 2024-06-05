import { Component, OnInit } from '@angular/core';
import {FormService} from "../../../secretary/components/secretary-create-document-template/form.service";
import {StudentSubmission} from "../../../../common/student-submission.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-view-documents-completed',
  templateUrl: './student-view-documents-completed.component.html',
  styleUrls: ['./student-view-documents-completed.component.css']
})
export class StudentViewDocumentsCompletedComponent implements OnInit {

  submissions$: Observable<StudentSubmission[]> | undefined;

  constructor(private formService: FormService, private router: Router) { }

  ngOnInit(): void {
    this.submissions$ = this.formService.getAllSubmissions();
  }

  openFormBuilder(submission: StudentSubmission) {
    this.router.navigate(['/student/submission', submission.id]);
  }

}
