import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DendaaddComponent } from './dendaadd.component';

describe('DendaaddComponent', () => {
  let component: DendaaddComponent;
  let fixture: ComponentFixture<DendaaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DendaaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DendaaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
