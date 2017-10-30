import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSewaComponent } from './data-sewa.component';

describe('DataSewaComponent', () => {
  let component: DataSewaComponent;
  let fixture: ComponentFixture<DataSewaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSewaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSewaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
