import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { HttpClientModule} from "@angular/common/http";
import {StudentService} from "./services/student.service";
import {RouterModule, Routes} from "@angular/router";
import { StudentLoginComponent } from './component/student-login/student-login.component';
import { StudentApiComponent } from './component/student-api/student-api.component';
import { SecretaryApiComponent } from './component/secretary-api/secretary-api.component';
import { SecretaryLoginComponent } from './component/secretary-login/secretary-login.component';
import { LoginComponent } from './component/login/login.component';
import { StudentGetAllStudentsComponent } from './component/student-get-all-students/student-get-all-students.component';
import { StudentGetStudentByIdComponent } from './component/student-get-student-by-id/student-get-student-by-id.component';
import { StudentAddStudentComponent } from './component/student-add-student/student-add-student.component';
import { StudentUpdateStudentComponent } from './component/student-update-student/student-update-student.component';
import { StudentDeleteStudentByIdComponent } from './component/student-delete-student-by-id/student-delete-student-by-id.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SecretaryAddSecretaryComponent } from './component/secretary-add-secretary/secretary-add-secretary.component';
import { SecretaryGetSecretaryByIdComponent } from './component/secretary-get-secretary-by-id/secretary-get-secretary-by-id.component';
import { SecretaryGetAllSecretariesComponent } from './component/secretary-get-all-secretaries/secretary-get-all-secretaries.component';
import { SecretaryUpdateSecretaryComponent } from './component/secretary-update-secretary/secretary-update-secretary.component';
import { SecretaryDeleteSecretaryByIdComponent } from './component/secretary-delete-secretary-by-id/secretary-delete-secretary-by-id.component';
import {SecretaryService} from "./services/secretary.service";

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'student-login', component: StudentLoginComponent },

  { path: 'secretary-login', component: SecretaryLoginComponent },

  { path: 'student-api', component: StudentApiComponent },
  { path: 'student-api/addStudent', component: StudentAddStudentComponent },
  { path: 'student-api/getStudentById', component: StudentGetStudentByIdComponent },
  { path: 'student-api/getAllStudents', component: StudentGetAllStudentsComponent },
  { path: 'student-api/getAllStudents/updateStudent/:id', component: StudentUpdateStudentComponent },
  { path: 'student-api/deleteStudentById', component: StudentDeleteStudentByIdComponent },

  { path: 'secretary-api', component: SecretaryApiComponent },
  { path: 'secretary-api/addSecretary', component: SecretaryAddSecretaryComponent },
  { path: 'secretary-api/getSecretaryById', component: SecretaryGetSecretaryByIdComponent },
  { path: 'secretary-api/getAllSecretaries', component: SecretaryGetAllSecretariesComponent },
  { path: 'secretary-api/getAllSecretaries/updateSecretary/:id', component: SecretaryUpdateSecretaryComponent },
  { path: 'secretary-api/deleteSecretaryById', component: SecretaryDeleteSecretaryByIdComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentLoginComponent,
    StudentApiComponent,
    SecretaryApiComponent,
    SecretaryLoginComponent,
    LoginComponent,
    StudentGetAllStudentsComponent,
    StudentGetStudentByIdComponent,
    StudentAddStudentComponent,
    StudentUpdateStudentComponent,
    StudentDeleteStudentByIdComponent,
    SecretaryAddSecretaryComponent,
    SecretaryGetSecretaryByIdComponent,
    SecretaryGetAllSecretariesComponent,
    SecretaryUpdateSecretaryComponent,
    SecretaryDeleteSecretaryByIdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [StudentService, SecretaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
