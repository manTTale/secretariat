import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutComponent} from "./components/about/about.component";
import {ManageStudentsComponent} from "./components/manage-students/manage-students.component";
import {AddStudentComponent} from "./components/add-student/add-student.component";
import {UpdateStudentComponent} from "./components/update-student/update-student.component";
import {UpdateSecretaryComponent} from "./components/update-secretary/update-secretary.component";
import {AddSecretaryComponent} from "./components/add-secretary/add-secretary.component";
import {ManageSecretariesComponent} from "./components/manage-secretaries/manage-secretaries.component";

const routes: Routes = [{
  path:'', component: AdminDashboardComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'manage-students', component: ManageStudentsComponent },
    { path: 'add-student', component: AddStudentComponent },
    { path: 'manage-students/updateStudent/:id', component: UpdateStudentComponent },
    { path: 'manage-secretaries', component: ManageSecretariesComponent },
    { path: 'add-secretary', component: AddSecretaryComponent },
    { path: 'manage-secretaries/updateSecretary/:id', component: UpdateSecretaryComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/admin/home', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
