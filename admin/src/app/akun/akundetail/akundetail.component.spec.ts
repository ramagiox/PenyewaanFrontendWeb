import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkundetailComponent } from './akundetail.component';

describe('AkundetailComponent', () => {
  let component: AkundetailComponent;
  let fixture: ComponentFixture<AkundetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkundetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkundetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
