import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretaryRoutingModule } from './secretary-routing.module';
import { SecretaryFooterComponent } from './components/secretary-footer/secretary-footer.component';
import { SecretaryDashboardComponent } from './components/secretary-dashboard/secretary-dashboard.component';
import { SecretaryHeaderComponent } from './components/secretary-header/secretary-header.component';
import { SecretaryHomeComponent } from './components/secretary-home/secretary-home.component';
import { SecretaryCreateDocumentComponent } from './components/secretary-create-document/secretary-create-document.component';
import { SecretaryReviewDocumentComponent } from './components/secretary-review-document/secretary-review-document.component';
import { CreateDocumentComponent } from './components/create-document/create-document.component';
import {FormioModule} from "angular-formio";
import {
  SecretaryCreateDocumentTemplateComponent
} from "./components/secretary-create-document-template/secretary-create-document-template.component";
import {FormsModule} from "@angular/forms";
import { TutorialCreateDocumentComponent } from './components/tutorial-create-document/tutorial-create-document.component';
import { TutorialReviewDocumentComponent } from './components/tutorial-review-document/tutorial-review-document.component';


@NgModule({
  declarations: [
    SecretaryFooterComponent,
    SecretaryDashboardComponent,
    SecretaryHeaderComponent,
    SecretaryHomeComponent,
    SecretaryCreateDocumentComponent,
    SecretaryReviewDocumentComponent,
    SecretaryCreateDocumentTemplateComponent,
    CreateDocumentComponent,
    TutorialCreateDocumentComponent,
    TutorialReviewDocumentComponent,
  ],
  imports: [
    CommonModule,
    SecretaryRoutingModule,
    FormioModule,
    FormsModule
  ]
})
export class SecretaryModule { }
