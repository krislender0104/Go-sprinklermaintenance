import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendnoticeComponent } from './sendnotice.component';

describe('SendnoticeComponent', () => {
  let component: SendnoticeComponent;
  let fixture: ComponentFixture<SendnoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendnoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
