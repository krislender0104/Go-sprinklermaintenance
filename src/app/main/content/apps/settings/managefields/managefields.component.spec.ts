import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagefieldsComponent } from './managefields.component';

describe('ManagefieldsComponent', () => {
  let component: ManagefieldsComponent;
  let fixture: ComponentFixture<ManagefieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagefieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagefieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
