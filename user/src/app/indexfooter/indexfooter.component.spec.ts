import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexfooterComponent } from './indexfooter.component';

describe('IndexfooterComponent', () => {
  let component: IndexfooterComponent;
  let fixture: ComponentFixture<IndexfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
