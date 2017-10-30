import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftarandetailComponent } from './pendaftarandetail.component';

describe('PendaftarandetailComponent', () => {
  let component: PendaftarandetailComponent;
  let fixture: ComponentFixture<PendaftarandetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftarandetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendaftarandetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
