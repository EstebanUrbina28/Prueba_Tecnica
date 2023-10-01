import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarElemtosComponent } from './listar-elemtos.component';

describe('ListarElemtosComponent', () => {
  let component: ListarElemtosComponent;
  let fixture: ComponentFixture<ListarElemtosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarElemtosComponent]
    });
    fixture = TestBed.createComponent(ListarElemtosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
