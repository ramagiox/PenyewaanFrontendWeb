import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyewaeditComponent } from './penyewaedit.component';

describe('PenyewaeditComponent', () => {
  let component: PenyewaeditComponent;
  let fixture: ComponentFixture<PenyewaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenyewaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenyewaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
