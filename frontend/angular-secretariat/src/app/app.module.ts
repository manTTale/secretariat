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

const routes: Routes = [
  { path: 'student-login', component: StudentLoginComponent },

  { path: 'student-api', component: StudentApiComponent },
  { path: 'student-api/addStudent', component: StudentAddStudentComponent },
  { path: 'student-api/deleteStudentById', component: StudentDeleteStudentByIdComponent },
  { path: 'student-api/getAllStudents', component: StudentGetAllStudentsComponent },
  { path: 'student-api/getStudentById', component: StudentGetStudentByIdComponent },
  { path: 'student-api/getAllStudents/updateStudent/:id', component: StudentUpdateStudentComponent },

  { path: 'secretary-login', component: SecretaryLoginComponent },
  { path: 'secretary-api', component: SecretaryApiComponent },
  { path: 'login', component: LoginComponent },
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
    StudentDeleteStudentByIdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
