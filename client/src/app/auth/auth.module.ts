import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthviewComponent } from './views/authview/authview.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    AuthviewComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
