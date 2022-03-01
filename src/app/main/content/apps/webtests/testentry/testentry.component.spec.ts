import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestentryComponent } from './testentry.component';

describe('TestentryComponent', () => {
  let component: TestentryComponent;
  let fixture: ComponentFixture<TestentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
