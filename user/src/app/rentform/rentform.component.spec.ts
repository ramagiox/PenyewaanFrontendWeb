import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentformComponent } from './rentform.component';

describe('RentformComponent', () => {
  let component: RentformComponent;
  let fixture: ComponentFixture<RentformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
