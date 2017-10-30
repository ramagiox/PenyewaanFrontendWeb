import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembayarandetailComponent } from './pembayarandetail.component';

describe('PembayarandetailComponent', () => {
  let component: PembayarandetailComponent;
  let fixture: ComponentFixture<PembayarandetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembayarandetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembayarandetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
