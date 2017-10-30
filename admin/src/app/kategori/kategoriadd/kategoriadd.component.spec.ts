import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriaddComponent } from './kategoriadd.component';

describe('KategoriaddComponent', () => {
  let component: KategoriaddComponent;
  let fixture: ComponentFixture<KategoriaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
