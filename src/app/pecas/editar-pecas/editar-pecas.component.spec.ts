import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPecasComponent } from './editar-pecas.component';

describe('EditarPecasComponent', () => {
  let component: EditarPecasComponent;
  let fixture: ComponentFixture<EditarPecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPecasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
