import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembayaraneditComponent } from './pembayaranedit.component';

describe('PembayaraneditComponent', () => {
  let component: PembayaraneditComponent;
  let fixture: ComponentFixture<PembayaraneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembayaraneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembayaraneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
