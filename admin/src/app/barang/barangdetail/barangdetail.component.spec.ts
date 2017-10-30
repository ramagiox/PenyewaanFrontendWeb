import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangdetailComponent } from './barangdetail.component';

describe('BarangdetailComponent', () => {
  let component: BarangdetailComponent;
  let fixture: ComponentFixture<BarangdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarangdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
