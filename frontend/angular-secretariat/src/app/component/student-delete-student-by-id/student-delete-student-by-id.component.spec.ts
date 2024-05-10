import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDeleteStudentByIdComponent } from './student-delete-student-by-id.component';

describe('StudentDeleteStudentByIdComponent', () => {
  let component: StudentDeleteStudentByIdComponent;
  let fixture: ComponentFixture<StudentDeleteStudentByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDeleteStudentByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDeleteStudentByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
