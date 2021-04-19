import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPecasComponent } from './listar-pecas.component';

describe('ListarPecasComponent', () => {
  let component: ListarPecasComponent;
  let fixture: ComponentFixture<ListarPecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPecasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
