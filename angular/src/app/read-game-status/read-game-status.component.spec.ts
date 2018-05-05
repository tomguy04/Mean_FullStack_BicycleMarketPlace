import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadGameStatusComponent } from './read-game-status.component';

describe('ReadGameStatusComponent', () => {
  let component: ReadGameStatusComponent;
  let fixture: ComponentFixture<ReadGameStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadGameStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadGameStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
