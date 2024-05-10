import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGetStudentByIdComponent } from './student-get-student-by-id.component';

describe('StudentGetStudentByIdComponent', () => {
  let component: StudentGetStudentByIdComponent;
  let fixture: ComponentFixture<StudentGetStudentByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGetStudentByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentGetStudentByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
