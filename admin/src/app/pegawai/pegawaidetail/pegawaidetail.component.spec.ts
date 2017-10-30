import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaidetailComponent } from './pegawaidetail.component';

describe('PegawaidetailComponent', () => {
  let component: PegawaidetailComponent;
  let fixture: ComponentFixture<PegawaidetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaidetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaidetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
