import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddStudentComponent } from './student-add-student.component';

describe('StudentAddStudentComponent', () => {
  let component: StudentAddStudentComponent;
  let fixture: ComponentFixture<StudentAddStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAddStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
