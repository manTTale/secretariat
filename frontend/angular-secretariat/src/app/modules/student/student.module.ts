import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentFooterComponent } from './components/student-footer/student-footer.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentHeaderComponent } from './components/student-header/student-header.component';
import { StudentViewDocumentsPendingCompletionComponent } from './components/student-view-documents-pending-completion/student-view-documents-pending-completion.component';
import { StudentViewDocumentsCompletedComponent } from './components/student-view-documents-completed/student-view-documents-completed.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';


@NgModule({
  declarations: [
    StudentFooterComponent,
    StudentDashboardComponent,
    StudentHeaderComponent,
    StudentViewDocumentsPendingCompletionComponent,
    StudentViewDocumentsCompletedComponent,
    StudentHomeComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
