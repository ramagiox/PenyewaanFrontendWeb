import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaraneditComponent } from './pendaftaranedit.component';

describe('PendaftaraneditComponent', () => {
  let component: PendaftaraneditComponent;
  let fixture: ComponentFixture<PendaftaraneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftaraneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendaftaraneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
