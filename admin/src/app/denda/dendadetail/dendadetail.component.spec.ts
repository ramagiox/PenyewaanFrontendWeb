import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DendadetailComponent } from './dendadetail.component';

describe('DendadetailComponent', () => {
  let component: DendadetailComponent;
  let fixture: ComponentFixture<DendadetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DendadetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DendadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
