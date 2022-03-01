import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniciancreateComponent } from './techniciancreate.component';

describe('TechniciancreateComponent', () => {
  let component: TechniciancreateComponent;
  let fixture: ComponentFixture<TechniciancreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechniciancreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechniciancreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
