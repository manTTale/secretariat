import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecretaryListComponent } from './components/secretary-list/secretary-list.component';
import { HttpClientModule } from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: 'getSecretaryById/:id', component: SecretaryListComponent},
  {path: 'getAllSecretaries', component: SecretaryListComponent},
  {path: '', redirectTo: '/secretary', pathMatch: 'full'},
  {path: '**', redirectTo: '/secretary', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SecretaryListComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
