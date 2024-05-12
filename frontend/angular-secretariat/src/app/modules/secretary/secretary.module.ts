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


@NgModule({
  declarations: [
    SecretaryFooterComponent,
    SecretaryDashboardComponent,
    SecretaryHeaderComponent,
    SecretaryHomeComponent,
    SecretaryCreateDocumentComponent,
    SecretaryReviewDocumentComponent,
    CreateDocumentComponent
  ],
  imports: [
    CommonModule,
    SecretaryRoutingModule,
  ]
})
export class SecretaryModule { }
