import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialSubmittedDocumentComponent } from './tutorial-submitted-document.component';

describe('TutorialSubmittedDocumentComponent', () => {
  let component: TutorialSubmittedDocumentComponent;
  let fixture: ComponentFixture<TutorialSubmittedDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialSubmittedDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialSubmittedDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
