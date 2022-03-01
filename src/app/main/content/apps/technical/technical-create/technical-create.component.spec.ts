import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalCreateComponent } from './technical-create.component';

describe('TechnicalCreateComponent', () => {
  let component: TechnicalCreateComponent;
  let fixture: ComponentFixture<TechnicalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
