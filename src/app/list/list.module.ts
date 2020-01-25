import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListService } from './services/list.service';
import { ListFormComponent } from './list-form/list-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListFormEntryComponent } from './list-form/list-form-entry/list-form-entry.component';

@NgModule({
  declarations: [
    ListFormComponent,
    ListFormEntryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ListService],
  exports: [ListFormComponent]
})
export class ListModule { }
