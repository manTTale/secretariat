import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUpdateStudentComponent } from './student-update-student.component';

describe('StudentUpdateStudentComponent', () => {
  let component: StudentUpdateStudentComponent;
  let fixture: ComponentFixture<StudentUpdateStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentUpdateStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentUpdateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
