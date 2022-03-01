import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratecustomnoticeComponent } from './generatecustomnotice.component';

describe('GeneratecustomnoticeComponent', () => {
  let component: GeneratecustomnoticeComponent;
  let fixture: ComponentFixture<GeneratecustomnoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratecustomnoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratecustomnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
