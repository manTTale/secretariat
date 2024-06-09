import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialManageSecretariesComponent } from './tutorial-manage-secretaries.component';

describe('TutorialManageSecretariesComponent', () => {
  let component: TutorialManageSecretariesComponent;
  let fixture: ComponentFixture<TutorialManageSecretariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialManageSecretariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialManageSecretariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
