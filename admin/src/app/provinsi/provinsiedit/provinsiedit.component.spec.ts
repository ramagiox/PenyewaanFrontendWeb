import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinsieditComponent } from './provinsiedit.component';

describe('ProvinsieditComponent', () => {
  let component: ProvinsieditComponent;
  let fixture: ComponentFixture<ProvinsieditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinsieditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinsieditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
