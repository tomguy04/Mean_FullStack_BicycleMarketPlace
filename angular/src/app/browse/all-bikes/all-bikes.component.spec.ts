import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBikesComponent } from './all-bikes.component';

describe('AllBikesComponent', () => {
  let component: AllBikesComponent;
  let fixture: ComponentFixture<AllBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
