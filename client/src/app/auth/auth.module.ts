import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthviewComponent } from './views/authview/authview.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthviewComponent, FormComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule,SharedModule],
})
export class AuthModule {}
