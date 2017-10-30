import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerawataneditComponent } from './perawatanedit.component';

describe('PerawataneditComponent', () => {
  let component: PerawataneditComponent;
  let fixture: ComponentFixture<PerawataneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerawataneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerawataneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
