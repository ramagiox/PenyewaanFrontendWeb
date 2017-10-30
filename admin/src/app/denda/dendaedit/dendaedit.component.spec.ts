import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DendaeditComponent } from './dendaedit.component';

describe('DendaeditComponent', () => {
  let component: DendaeditComponent;
  let fixture: ComponentFixture<DendaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DendaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DendaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
