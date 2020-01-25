import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFormComponent } from './list/list-form/list-form.component';

const routes: Routes = [
  {path: 'list/add', component: ListFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
