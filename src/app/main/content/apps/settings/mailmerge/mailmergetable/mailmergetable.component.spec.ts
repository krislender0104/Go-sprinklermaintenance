import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailmergetableComponent } from './mailmergetable.component';

describe('MailmergetableComponent', () => {
  let component: MailmergetableComponent;
  let fixture: ComponentFixture<MailmergetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailmergetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailmergetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
