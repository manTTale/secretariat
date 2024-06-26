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
import {
  SecretaryCreateDocumentTemplateComponent
} from "./components/secretary-create-document-template/secretary-create-document-template.component";
import {
  TutorialCreateDocumentComponent
} from "./components/tutorial-create-document/tutorial-create-document.component";
import {
  TutorialReviewDocumentComponent
} from "./components/tutorial-review-document/tutorial-review-document.component";

const routes: Routes = [{
  path:'', component: SecretaryDashboardComponent,
  children: [
    { path: 'home', component: SecretaryHomeComponent },
    { path: 'home/tutorial-create-document', component: TutorialCreateDocumentComponent },
    { path: 'home/tutorial-review-document', component: TutorialReviewDocumentComponent },
    { path: 'create-document', component: SecretaryCreateDocumentComponent },
    { path: 'review-document', component: SecretaryReviewDocumentComponent },
    { path: 'create-document-template', component: SecretaryCreateDocumentTemplateComponent },
    { path: 'edit-document-template/:id', component: SecretaryCreateDocumentTemplateComponent },
    { path: '', redirectTo: '/secretary/home', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryRoutingModule { }
