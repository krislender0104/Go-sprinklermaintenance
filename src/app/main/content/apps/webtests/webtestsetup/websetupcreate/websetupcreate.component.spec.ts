import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsetupcreateComponent } from './websetupcreate.component';

describe('WebsetupcreateComponent', () => {
  let component: WebsetupcreateComponent;
  let fixture: ComponentFixture<WebsetupcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsetupcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsetupcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
