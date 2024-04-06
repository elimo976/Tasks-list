import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCategoriaComponent } from './tasks-categoria.component';

describe('TasksCategoriaComponent', () => {
  let component: TasksCategoriaComponent;
  let fixture: ComponentFixture<TasksCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksCategoriaComponent]
    });
    fixture = TestBed.createComponent(TasksCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
