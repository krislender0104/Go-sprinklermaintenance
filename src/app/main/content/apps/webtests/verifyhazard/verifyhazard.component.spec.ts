import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyhazardComponent } from './verifyhazard.component';

describe('VerifyhazardComponent', () => {
  let component: VerifyhazardComponent;
  let fixture: ComponentFixture<VerifyhazardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyhazardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyhazardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
