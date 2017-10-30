import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorieditComponent } from './kategoriedit.component';

describe('KategorieditComponent', () => {
  let component: KategorieditComponent;
  let fixture: ComponentFixture<KategorieditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorieditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorieditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
