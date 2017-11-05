import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSewakembaliComponent } from './data-sewakembali.component';

describe('DataSewakembaliComponent', () => {
  let component: DataSewakembaliComponent;
  let fixture: ComponentFixture<DataSewakembaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSewakembaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSewakembaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
