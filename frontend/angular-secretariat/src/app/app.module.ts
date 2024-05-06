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

const routes: Routes = [
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'student-api', component: StudentApiComponent },
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
