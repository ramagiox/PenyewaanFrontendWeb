import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinsidetailComponent } from './provinsidetail.component';

describe('ProvinsidetailComponent', () => {
  let component: ProvinsidetailComponent;
  let fixture: ComponentFixture<ProvinsidetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinsidetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinsidetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
