import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecretaryDashboardComponent} from "./components/secretary-dashboard/secretary-dashboard.component";
import {SecretaryHomeComponent} from "./components/secretary-home/secretary-home.component";
import {
  SecretaryReviewDocumentComponent
} from "./components/secretary-review-document/secretary-review-document.component";
import {
  SecretaryCreateDocumentComponent
} from "./components/secretary-create-document/secretary-create-document.component";

const routes: Routes = [{
  path:'', component: SecretaryDashboardComponent,
  children: [
    { path: 'home', component: SecretaryHomeComponent },
    { path: 'create-document', component: SecretaryCreateDocumentComponent },
    { path: 'review-document', component: SecretaryReviewDocumentComponent },
    { path: '', redirectTo: '/secretary/home', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryRoutingModule { }
