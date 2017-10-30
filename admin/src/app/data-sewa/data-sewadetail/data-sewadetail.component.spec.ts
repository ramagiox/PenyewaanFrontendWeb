import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSewadetailComponent } from './data-sewadetail.component';

describe('DataSewadetailComponent', () => {
  let component: DataSewadetailComponent;
  let fixture: ComponentFixture<DataSewadetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSewadetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSewadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
