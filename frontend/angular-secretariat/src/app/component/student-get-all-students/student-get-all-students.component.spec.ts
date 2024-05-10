import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGetAllStudentsComponent } from './student-get-all-students.component';

describe('StudentGetAllStudentsComponent', () => {
  let component: StudentGetAllStudentsComponent;
  let fixture: ComponentFixture<StudentGetAllStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGetAllStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentGetAllStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
