import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewDocumentsCompletedComponent } from './student-view-documents-completed.component';

describe('StudentViewDocumentsCompletedComponent', () => {
  let component: StudentViewDocumentsCompletedComponent;
  let fixture: ComponentFixture<StudentViewDocumentsCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewDocumentsCompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentViewDocumentsCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
