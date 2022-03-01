import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditletterComponent } from './editletter.component';

describe('EditletterComponent', () => {
  let component: EditletterComponent;
  let fixture: ComponentFixture<EditletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
