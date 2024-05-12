import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ManageStudentsComponent } from './components/manage-students/manage-students.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ManageSecretariesComponent } from './components/manage-secretaries/manage-secretaries.component';
import { AddSecretaryComponent } from './components/add-secretary/add-secretary.component';
import { UpdateSecretaryComponent } from './components/update-secretary/update-secretary.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ManageStudentsComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    ManageSecretariesComponent,
    AddSecretaryComponent,
    UpdateSecretaryComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
