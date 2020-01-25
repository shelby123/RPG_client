import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ListService } from '../services/list.service';
import { IList } from '../services/iList';
import { NG_MODEL_WITH_FORM_CONTROL_WARNING } from '@angular/forms/src/directives';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.sass']
})
export class ListFormComponent implements OnInit {

  listForm: FormGroup;
  private list: IList;
  // private listEntries: IListFormEntry[];

  get listEntries(): FormArray {
    return this.listForm.get('listEntries') as FormArray;
  }

  get listName() {
    return this.listForm.get('listName').value;
  }

  constructor(private fb: FormBuilder, private listService: ListService) { }

  ngOnInit() {
    this.list = {
      name: '',
      id: undefined,
      createdAt: new Date().getTime(),
      lastModified: new Date().getTime(),
      user: 'Shelby',
      entries: []
    };
    // this.listEntries = [];
    this.listForm = this.fb.group({
      listName: [this.list.name, Validators.required],
      listEntries: this.fb.array([])
    });
    this.listForm.valueChanges.subscribe(event => console.log(event));
  }

  createList() {
    console.log('list to create: ');
    console.log(this.listForm.value);
    console.log(this.list);
    if (this.listForm.valid) {
      this.listEntries.controls.forEach(element => {
        console.log(element.value);
      });
      // this.listService.createList(this.listName, 'FrontEndUser').subscribe(res => {
      //   console.log(res);
      // });
    }
  }

  createListEntry() {
    this.listEntries.push(this.fb.group({
      type: [''],
      value: ['']
    }));
  }

}
