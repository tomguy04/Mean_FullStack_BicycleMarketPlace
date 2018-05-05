import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteComponent } from './edit-delete.component';

describe('EditDeleteComponent', () => {
  let component: EditDeleteComponent;
  let fixture: ComponentFixture<EditDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
