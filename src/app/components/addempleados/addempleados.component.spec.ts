import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddempleadosComponent } from './addempleados.component';

describe('AddempleadosComponent', () => {
  let component: AddempleadosComponent;
  let fixture: ComponentFixture<AddempleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddempleadosComponent]
    });
    fixture = TestBed.createComponent(AddempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
