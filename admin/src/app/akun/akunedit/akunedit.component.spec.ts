import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkuneditComponent } from './akunedit.component';

describe('AkuneditComponent', () => {
  let component: AkuneditComponent;
  let fixture: ComponentFixture<AkuneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkuneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkuneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
