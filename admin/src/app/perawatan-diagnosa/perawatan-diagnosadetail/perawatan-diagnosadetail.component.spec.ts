import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerawatanDiagnosadetailComponent } from './perawatan-diagnosadetail.component';

describe('PerawatanDiagnosadetailComponent', () => {
  let component: PerawatanDiagnosadetailComponent;
  let fixture: ComponentFixture<PerawatanDiagnosadetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerawatanDiagnosadetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerawatanDiagnosadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
