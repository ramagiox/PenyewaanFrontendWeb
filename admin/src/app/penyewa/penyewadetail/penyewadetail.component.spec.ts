import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenyewadetailComponent } from './penyewadetail.component';

describe('PenyewadetailComponent', () => {
  let component: PenyewadetailComponent;
  let fixture: ComponentFixture<PenyewadetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenyewadetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenyewadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
