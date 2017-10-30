import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerawatandetailComponent } from './perawatandetail.component';

describe('PerawatandetailComponent', () => {
  let component: PerawatandetailComponent;
  let fixture: ComponentFixture<PerawatandetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerawatandetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerawatandetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
