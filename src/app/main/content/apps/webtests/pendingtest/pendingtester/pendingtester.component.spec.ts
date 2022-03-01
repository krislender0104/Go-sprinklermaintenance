import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingtesterComponent } from './pendingtester.component';

describe('PendingtesterComponent', () => {
  let component: PendingtesterComponent;
  let fixture: ComponentFixture<PendingtesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingtesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingtesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
