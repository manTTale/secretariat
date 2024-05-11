import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewDocumentsPendingCompletionComponent } from './student-view-documents-pending-completion.component';

describe('StudentViewDocumentsPendingCompletionComponent', () => {
  let component: StudentViewDocumentsPendingCompletionComponent;
  let fixture: ComponentFixture<StudentViewDocumentsPendingCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewDocumentsPendingCompletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentViewDocumentsPendingCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
