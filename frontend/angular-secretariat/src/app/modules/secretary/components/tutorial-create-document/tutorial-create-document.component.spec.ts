import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialCreateDocumentComponent } from './tutorial-create-document.component';

describe('TutorialCreateDocumentComponent', () => {
  let component: TutorialCreateDocumentComponent;
  let fixture: ComponentFixture<TutorialCreateDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialCreateDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialCreateDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
