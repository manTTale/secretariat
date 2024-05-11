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

const routes: Routes = [{
  path:'', component: StudentDashboardComponent,
  children: [
    { path: 'home', component: StudentHomeComponent },
    { path: 'view-documents-pending-completion', component: StudentViewDocumentsPendingCompletionComponent },
    { path: 'view-documents-completed', component: StudentViewDocumentsCompletedComponent },
    { path: '', redirectTo: '/student/home', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
