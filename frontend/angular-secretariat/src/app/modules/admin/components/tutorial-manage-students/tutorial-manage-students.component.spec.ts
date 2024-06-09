import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialManageStudentsComponent } from './tutorial-manage-students.component';

describe('TutorialManageStudentsComponent', () => {
  let component: TutorialManageStudentsComponent;
  let fixture: ComponentFixture<TutorialManageStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialManageStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialManageStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
