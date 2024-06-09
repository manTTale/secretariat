import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialAddStudentComponent } from './tutorial-add-student.component';

describe('TutorialAddStudentComponent', () => {
  let component: TutorialAddStudentComponent;
  let fixture: ComponentFixture<TutorialAddStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialAddStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
