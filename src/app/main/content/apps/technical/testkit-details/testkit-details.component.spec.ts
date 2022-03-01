import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestkitDetailsComponent } from './testkit-details.component';

describe('TestkitDetailsComponent', () => {
  let component: TestkitDetailsComponent;
  let fixture: ComponentFixture<TestkitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestkitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestkitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
