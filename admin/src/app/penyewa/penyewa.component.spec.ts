import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyewaComponent } from './penyewa.component';

describe('PenyewaComponent', () => {
  let component: PenyewaComponent;
  let fixture: ComponentFixture<PenyewaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenyewaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenyewaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
