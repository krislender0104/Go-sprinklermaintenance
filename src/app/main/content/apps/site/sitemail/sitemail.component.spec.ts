import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemailComponent } from './sitemail.component';

describe('SitemailComponent', () => {
  let component: SitemailComponent;
  let fixture: ComponentFixture<SitemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
