import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentDashboardComponent} from "./components/student-dashboard/student-dashboard.component";
import {StudentHomeComponent} from "./components/student-home/student-home.component";
import {
  StudentViewDocumentsPendingCompletionComponent
} from "./components/student-view-documents-pending-completion/student-view-documents-pending-completion.component";
import {
  StudentViewDocumentsCompletedComponent
} from "./components/student-view-documents-completed/student-view-documents-completed.component";
import {StudentUploadDocumentComponent} from "./components/student-upload-document/student-upload-document.component";
import {
  StudentSubmissionDetailComponent
} from "./components/student-submission-detail/student-submission-detail.component";
import {
  TutorialSubmitDocumentComponent
} from "./components/tutorial-submit-document/tutorial-submit-document.component";

const routes: Routes = [{
  path: '', component: StudentDashboardComponent,
  children: [
    { path: 'home', component: StudentHomeComponent },
    { path: 'home/tutorial-submit-document', component: TutorialSubmitDocumentComponent },
    { path: 'home/tutorial-submitted-document', component: TutorialSubmitDocumentComponent },
    { path: 'view-documents-pending-completion', component: StudentViewDocumentsPendingCompletionComponent },
    { path: 'view-documents-completed', component: StudentViewDocumentsCompletedComponent },
    { path: 'upload-document', component: StudentUploadDocumentComponent },
    { path: 'submission/:id', component: StudentSubmissionDetailComponent },
    { path: '', redirectTo: '/student/home', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
