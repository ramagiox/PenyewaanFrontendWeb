import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinsiaddComponent } from './provinsiadd.component';

describe('ProvinsiaddComponent', () => {
  let component: ProvinsiaddComponent;
  let fixture: ComponentFixture<ProvinsiaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinsiaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinsiaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
