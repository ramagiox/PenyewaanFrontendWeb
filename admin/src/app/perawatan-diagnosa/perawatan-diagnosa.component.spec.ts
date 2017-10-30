import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerawatanDiagnosaComponent } from './perawatan-diagnosa.component';

describe('PerawatanDiagnosaComponent', () => {
  let component: PerawatanDiagnosaComponent;
  let fixture: ComponentFixture<PerawatanDiagnosaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerawatanDiagnosaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerawatanDiagnosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
