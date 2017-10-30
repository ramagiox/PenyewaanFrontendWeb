import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangaddComponent } from './barangadd.component';

describe('BarangaddComponent', () => {
  let component: BarangaddComponent;
  let fixture: ComponentFixture<BarangaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarangaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
