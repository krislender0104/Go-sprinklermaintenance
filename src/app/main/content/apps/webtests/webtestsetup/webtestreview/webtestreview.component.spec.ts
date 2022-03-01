import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebtestreviewComponent } from './webtestreview.component';

describe('WebtestreviewComponent', () => {
  let component: WebtestreviewComponent;
  let fixture: ComponentFixture<WebtestreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebtestreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebtestreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
