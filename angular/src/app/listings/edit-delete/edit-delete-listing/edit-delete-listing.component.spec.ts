import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteListingComponent } from './edit-delete-listing.component';

describe('EditDeleteListingComponent', () => {
  let component: EditDeleteListingComponent;
  let fixture: ComponentFixture<EditDeleteListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeleteListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
