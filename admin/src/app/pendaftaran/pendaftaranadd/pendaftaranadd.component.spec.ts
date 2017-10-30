import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranaddComponent } from './pendaftaranadd.component';

describe('PendaftaranaddComponent', () => {
  let component: PendaftaranaddComponent;
  let fixture: ComponentFixture<PendaftaranaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftaranaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendaftaranaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
