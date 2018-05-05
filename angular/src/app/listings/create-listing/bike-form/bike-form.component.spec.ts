import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeFormComponent } from './bike-form.component';

describe('BikeFormComponent', () => {
  let component: BikeFormComponent;
  let fixture: ComponentFixture<BikeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
