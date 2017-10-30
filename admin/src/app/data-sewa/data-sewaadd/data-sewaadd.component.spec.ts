import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSewaaddComponent } from './data-sewaadd.component';

describe('DataSewaaddComponent', () => {
  let component: DataSewaaddComponent;
  let fixture: ComponentFixture<DataSewaaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSewaaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSewaaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
