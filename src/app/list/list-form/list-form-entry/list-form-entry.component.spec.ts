import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormEntryComponent } from './list-form-entry.component';

describe('ListFormEntryComponent', () => {
  let component: ListFormEntryComponent;
  let fixture: ComponentFixture<ListFormEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFormEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
