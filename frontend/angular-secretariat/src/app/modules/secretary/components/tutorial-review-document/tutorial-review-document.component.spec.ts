import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialReviewDocumentComponent } from './tutorial-review-document.component';

describe('TutorialReviewDocumentComponent', () => {
  let component: TutorialReviewDocumentComponent;
  let fixture: ComponentFixture<TutorialReviewDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialReviewDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialReviewDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
