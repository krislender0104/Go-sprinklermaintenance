import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupcustomnoticeComponent } from './setupcustomnotice.component';

describe('SetupcustomnoticeComponent', () => {
  let component: SetupcustomnoticeComponent;
  let fixture: ComponentFixture<SetupcustomnoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupcustomnoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupcustomnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
