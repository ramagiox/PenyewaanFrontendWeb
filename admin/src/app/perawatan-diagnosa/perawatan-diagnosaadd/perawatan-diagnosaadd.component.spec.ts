import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerawatanDiagnosaaddComponent } from './perawatan-diagnosaadd.component';

describe('PerawatanDiagnosaaddComponent', () => {
  let component: PerawatanDiagnosaaddComponent;
  let fixture: ComponentFixture<PerawatanDiagnosaaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerawatanDiagnosaaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerawatanDiagnosaaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
