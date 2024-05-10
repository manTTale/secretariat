import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApiComponent } from './student-api.component';

describe('StudentApiComponent', () => {
  let component: StudentApiComponent;
  let fixture: ComponentFixture<StudentApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
