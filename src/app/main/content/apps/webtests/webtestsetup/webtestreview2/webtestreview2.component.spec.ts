import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Webtestreview2Component } from './webtestreview2.component';

describe('Webtestreview2Component', () => {
  let component: Webtestreview2Component;
  let fixture: ComponentFixture<Webtestreview2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Webtestreview2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Webtestreview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
