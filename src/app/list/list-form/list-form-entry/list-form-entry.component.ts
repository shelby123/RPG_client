import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-form-entry',
  templateUrl: './list-form-entry.component.html',
  styleUrls: ['./list-form-entry.component.sass']
})
export class ListFormEntryComponent implements OnInit, AfterViewInit {


  @Input() myGroup: FormGroup;
  @Input() myEntryObject: IListFormEntry;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.myGroup);
  }
  ngAfterViewInit() {
    this.myGroup.patchValue({type: 'text'});
  }

}
