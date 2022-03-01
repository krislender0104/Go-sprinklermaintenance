import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExporteditComponent } from './exportedit.component';

describe('ExporteditComponent', () => {
  let component: ExporteditComponent;
  let fixture: ComponentFixture<ExporteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExporteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExporteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
