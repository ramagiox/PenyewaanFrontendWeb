import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaieditComponent } from './pegawaiedit.component';

describe('PegawaieditComponent', () => {
  let component: PegawaieditComponent;
  let fixture: ComponentFixture<PegawaieditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegawaieditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaieditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
