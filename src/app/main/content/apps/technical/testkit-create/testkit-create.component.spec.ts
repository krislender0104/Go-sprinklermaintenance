import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestkitCreateComponent } from './testkit-create.component';

describe('TestkitCreateComponent', () => {
  let component: TestkitCreateComponent;
  let fixture: ComponentFixture<TestkitCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestkitCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestkitCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
