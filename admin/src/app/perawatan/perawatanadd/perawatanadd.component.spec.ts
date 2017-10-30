import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerawatanaddComponent } from './perawatanadd.component';

describe('PerawatanaddComponent', () => {
  let component: PerawatanaddComponent;
  let fixture: ComponentFixture<PerawatanaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerawatanaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerawatanaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
