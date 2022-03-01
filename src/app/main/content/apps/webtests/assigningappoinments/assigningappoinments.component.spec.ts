import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigningappoinmentsComponent } from './assigningappoinments.component';

describe('AssigningappoinmentsComponent', () => {
  let component: AssigningappoinmentsComponent;
  let fixture: ComponentFixture<AssigningappoinmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigningappoinmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigningappoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
