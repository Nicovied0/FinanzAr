import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { AppviewComponent } from './views/appview/appview.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    AppviewComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
