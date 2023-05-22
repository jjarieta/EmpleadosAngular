import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowempleadosComponent } from './showempleados.component';

describe('ShowempleadosComponent', () => {
  let component: ShowempleadosComponent;
  let fixture: ComponentFixture<ShowempleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowempleadosComponent]
    });
    fixture = TestBed.createComponent(ShowempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
