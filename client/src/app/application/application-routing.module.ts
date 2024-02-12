import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppviewComponent } from './views/appview/appview.component';

const routes: Routes = [
  {
    path: '',
    component: AppviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
