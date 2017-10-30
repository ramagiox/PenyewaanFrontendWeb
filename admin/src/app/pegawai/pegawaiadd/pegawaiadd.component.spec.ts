import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiaddComponent } from './pegawaiadd.component';

describe('PegawaiaddComponent', () => {
  let component: PegawaiaddComponent;
  let fixture: ComponentFixture<PegawaiaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaiaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
