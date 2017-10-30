import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembayaranaddComponent } from './pembayaranadd.component';

describe('PembayaranaddComponent', () => {
  let component: PembayaranaddComponent;
  let fixture: ComponentFixture<PembayaranaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembayaranaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembayaranaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
