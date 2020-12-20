import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Especificaciones2Component } from './especificaciones2.component';

describe('Especificaciones2Component', () => {
  let component: Especificaciones2Component;
  let fixture: ComponentFixture<Especificaciones2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Especificaciones2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Especificaciones2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
