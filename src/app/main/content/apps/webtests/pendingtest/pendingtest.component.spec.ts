import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingtestComponent } from './pendingtest.component';

describe('PendingtestComponent', () => {
  let component: PendingtestComponent;
  let fixture: ComponentFixture<PendingtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
