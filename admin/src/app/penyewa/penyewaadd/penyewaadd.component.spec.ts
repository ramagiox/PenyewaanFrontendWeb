import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyewaaddComponent } from './penyewaadd.component';

describe('PenyewaaddComponent', () => {
  let component: PenyewaaddComponent;
  let fixture: ComponentFixture<PenyewaaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenyewaaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenyewaaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
