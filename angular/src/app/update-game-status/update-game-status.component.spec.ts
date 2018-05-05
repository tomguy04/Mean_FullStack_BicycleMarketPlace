import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGameStatusComponent } from './update-game-status.component';

describe('UpdateGameStatusComponent', () => {
  let component: UpdateGameStatusComponent;
  let fixture: ComponentFixture<UpdateGameStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGameStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGameStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
