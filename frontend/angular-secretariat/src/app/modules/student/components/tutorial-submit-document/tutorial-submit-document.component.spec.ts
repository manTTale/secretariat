import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialSubmitDocumentComponent } from './tutorial-submit-document.component';

describe('TutorialSubmitDocumentComponent', () => {
  let component: TutorialSubmitDocumentComponent;
  let fixture: ComponentFixture<TutorialSubmitDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialSubmitDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialSubmitDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
