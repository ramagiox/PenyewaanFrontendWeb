import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerawatanDiagnosaeditComponent } from './perawatan-diagnosaedit.component';

describe('PerawatanDiagnosaeditComponent', () => {
  let component: PerawatanDiagnosaeditComponent;
  let fixture: ComponentFixture<PerawatanDiagnosaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerawatanDiagnosaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerawatanDiagnosaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
