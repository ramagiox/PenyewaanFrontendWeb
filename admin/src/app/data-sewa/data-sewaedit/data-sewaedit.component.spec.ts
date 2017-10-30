import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSewaeditComponent } from './data-sewaedit.component';

describe('DataSewaeditComponent', () => {
  let component: DataSewaeditComponent;
  let fixture: ComponentFixture<DataSewaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSewaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSewaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
