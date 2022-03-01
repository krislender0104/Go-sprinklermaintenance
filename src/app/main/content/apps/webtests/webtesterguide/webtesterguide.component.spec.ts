import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebtesterguideComponent } from './webtesterguide.component';

describe('WebtesterguideComponent', () => {
  let component: WebtesterguideComponent;
  let fixture: ComponentFixture<WebtesterguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebtesterguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebtesterguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
