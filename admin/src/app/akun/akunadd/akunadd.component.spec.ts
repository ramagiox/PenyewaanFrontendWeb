import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkunaddComponent } from './akunadd.component';

describe('AkunaddComponent', () => {
  let component: AkunaddComponent;
  let fixture: ComponentFixture<AkunaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkunaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkunaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
